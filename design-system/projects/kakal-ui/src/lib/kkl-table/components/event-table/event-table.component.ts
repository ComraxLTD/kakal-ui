import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, Observable, Subject, take, takeUntil } from 'rxjs';
import { RowActionEvent, RowActionModel, RowExpandEvent } from '../../models/table-actions.model'
import { TableBase } from '../../models/table.model';
import { TableServerModel } from '../../models/table-server.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
import { HttpClient, HttpParams } from '@angular/common/http';
import { setControls } from '../../../mei-services/services/form-create';
import { KklSelectOption } from '../../../mei-form/models/kkl-select.model';
import { OptionsModel } from '../../../mei-form/models/options.model';
import { DialogService } from '../../../dialog/dialog.service';
import { BreakpointService } from '../../../../services/services';

const normalActions = ['inlineEdit', 'inlineDelete', 'inlineExpand'];

@Component({
  selector: 'kkl-server-table',
  templateUrl: '../all-tabels/all-table.component.html',
  styleUrls: ['../all-tabels/all-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EventTableComponent implements OnInit {
  destroySubject$: Subject<void> = new Subject();

  @Input() noMobile: boolean = false;
  typeLocal: boolean = false;
  currentEditRow: number = -1;
  mobile$: Observable<boolean>;

  @ViewChild(MatTable) table: MatTable<any>;

  isLoading: boolean = true;

  @Output() actionClicked = new EventEmitter<RowActionEvent>();
  @Output() deleteRow = new EventEmitter<any>();
  @Output() saveRow = new EventEmitter<any>();
  @Output() expandRow = new EventEmitter<RowExpandEvent>();
  @Output() requestChanged = new EventEmitter<any>();


  @Input() expandTemplate: TemplateRef<any> | undefined;

  @Input() colsTemplate: any;

  @Input() newRowAction: string;

  @Input() paging: boolean = true;
  @Input() pageSize: number = 10;

  dragable: boolean;
  @Input() set draggable(val: boolean) {
    if(val) {
      if(!this.displayedColumns.includes('dragHandeler')){
        this.displayedColumns.unshift('dragHandeler')
      }
    } else {
      if(this.displayedColumns.includes('dragHandeler')) {
        const index = this.displayedColumns.indexOf('dragHandeler');
        if (index > -1) {
          this.displayedColumns.splice(index, 1);
        }
      }
    }
    this.dragable = val;
  }


  oneColumns: TableBase[];
  @Input() set columns(value: TableBase[]) {
    if(this.oneColumns && this.searchRow) {
      const newVals: TableBase[] = [];
      const sameVals: TableBase[] = [];
      value.forEach(a => {
        if(this.oneColumns.find( vendor => Object.assign(vendor) === Object.assign(a) )) {
          sameVals.push(this.oneColumns.find( vendor => Object.assign(vendor) === Object.assign(a) ));
        } else {
          newVals.push(a);
        }
      });
      const removed = this.oneColumns.filter(b => !sameVals.includes(b));
      removed.forEach(c => {
        this.searchRow.removeControl(c.key);
        this.rows.controls.forEach(d => {
          (d as FormGroup).removeControl(c.key);
        });
      });
      setControls(newVals, this.searchRow, this.fb, this.localObservables);
      this.rows.controls.forEach((h, index) => {
        setControls(newVals, h as FormGroup, this.fb, this.editObservables.get(index));
      });
    }
    this.oneColumns = value;
    this.displayedColumns = value.map(a => a.key);
    if(this.localButtons?.length) {
      this.displayedColumns.push('actions');
    }
    if(this.dragable) {
      this.displayedColumns.unshift('dragHandeler')
    }
    // const row = this.fb.group({});
    // this.oneColumns.forEach(col => {
    //   row.addControl(col.key, this.fb.control(null));
    // })
    // this.searchRow = row;
  }


  dataTable: any[] = undefined;
  @Input() set dataSourceServer(value: TableServerModel) {
    if(value) {
      this.dataTable = value.rows;
      setTimeout(() => {
        this.paginator.length = value.count;
        if(value.pageSize) {
          this.paginator.pageSize = value.pageSize;
        }
        this.readySpanData(0, this.dataTable.length);
      });
    } else {
      this.dataTable = [];
    }
    this.isLoading = false;
  }

  myDataSourceUrl: string;
  @Input() set dataSourceUrl(val: string){
    this.myDataSourceUrl = val;
    setTimeout(() => {
      this.getData(0, this.paginator.pageSize, undefined, this.searchRow.value);
    });
  }

  localButtons: RowActionModel[];
  @Input() set rowActions(val: RowActionModel[]) {
    if(val.length) {
      if(!this.displayedColumns.includes('actions')){
        this.displayedColumns.push('actions');
      }
    } else {
      if(this.displayedColumns.includes('actions')) {
        const index = this.displayedColumns.indexOf('actions');
        if (index > -1) {
          this.displayedColumns.splice(index, 1);
        }
      }
    }
    this.localButtons = val;
  }

  displayedColumns: string[] = [];

  editItems: any[] = [];
  rows: FormArray = this.fb.array([]);
  @Input() searchRow: FormGroup;
  form: FormGroup;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  expandedElement: any;

  lastSpan: string | undefined;
  spans: any[] = [];


  dragDisabled = true;

  myOptions: OptionsModel[] = [];
  @Input() set options(val: OptionsModel[]) {
    if(val) {
      this.myOptions = val;
      if(this.form) {
        this.putOptions();
      }
    }
  }



  localObservables: Map<string, BehaviorSubject<KklSelectOption[]>> = new Map<string, BehaviorSubject<KklSelectOption[]>>();
  editObservables:  Map<number, Map<string, BehaviorSubject<KklSelectOption[]>>> = new Map<number, Map<string, BehaviorSubject<KklSelectOption[]>>>();


  ngOnInit(): void {
    if(!this.searchRow) {
      this.searchRow = this.fb.group({});
    }
    this.form = this.fb.group({ 'myRows': this.rows, 'search': this.searchRow });
    setControls(this.oneColumns, this.searchRow, this.fb, this.localObservables);
    this.mobile$ = this.breakpointService.isMobile();
  }

  constructor(private fb: FormBuilder, private http: HttpClient, private dialogService: DialogService, private breakpointService: BreakpointService) {
  }

  ngAfterViewInit() {
    if(this.paging) {
      this.paginator.pageSize = this.pageSize;
    }
    this.sort.sortChange.pipe(takeUntil(this.destroySubject$)).subscribe((sor: any) => {
      this.requsetChange(sor);
    });
  }

  searchChanged() {
    this.requsetChange(null);
  }

  getData(page: number, pageSize: number, sort: any, search: any) {
    let params = new HttpParams()
    .set('page', page)
    .set('pageSize', pageSize)
    .set('sort', sort)
    .set('search', search);
    this.http.get(this.dataSourceUrl, { params: params }).pipe(take(1)).subscribe((value:any) => {
      if(value) {
        this.dataTable = value.rows;
        setTimeout(() => {
          this.paginator.length = value.count;
        });
        this.readySpanData(0, this.dataTable.length);
      } else {
        this.dataTable = [];
      }
      this.isLoading = false;
    });
  }

  requsetChange(sor: any) {
    if (this.myDataSourceUrl) {
      this.getData(0, this.paginator.pageSize, sor, this.searchRow.value);
    } else {
      this.requestChanged.emit({page: 0, pageSize: this.paginator.pageSize, sort: sor, search: this.searchRow.value});
    }
    this.paginator.pageIndex = 0;
    this.cleanPreLoading();
    this.currentEditRow = -1;
  }

  pageChanged(event: PageEvent) {
    if (this.myDataSourceUrl) {
      this.getData(0, this.paginator.pageSize, null, this.searchRow.value);
    } else {
      this.requestChanged.emit({page: 0, pageSize: this.paginator.pageSize, sort: null, search: this.searchRow.value});
    }
    this.requestChanged.emit({page: event.pageIndex, pageSize: event.pageSize, search: this.searchRow.value});
    this.cleanPreLoading();
  }


  cleanPreLoading() {
    this.editItems = [];
    this.expandedElement = undefined;
    this.rows.clear();
    this.isLoading = true;
    this.dataTable = undefined;
  }

  buttonClick(butt: RowActionModel, obj:any, key: string) {
    if(normalActions.includes(butt.type)) {
      switch (butt.type) {
        case 'inlineDelete':
          this.dialogService.openAlert({message: 'האם אתה בטוח שאתה רוצה למחוק?', isConfirm: true}).afterClosed().subscribe(result => {
            if(result){
              this.deleteRow.emit(obj);
            }
          });
          break;
        case 'inlineEdit':
          this.addRowGroup(obj);
          this.editItems = [...this.editItems, obj];
          break;
        case 'inlineExpand':
          this.expandRow.emit({row: obj, key: key});
          this.addExpandedRow(obj);
          break;
        default:
          break;
      }
    } else {
      this.actionClicked.emit({action: butt.type, row: obj, key: key});
    }
  }

  addExpandedRow(obj: any) {
    this.expandedElement = this.expandedElement == obj? null : obj;
  }

  onExpandOut(obj: any) {
    if(this.rowActions?.some(a => a.type == 'inlineExpand')) {
      this.addExpandedRow(obj);
    }
  }

  saveRowClick(ele: any) {
    const index = this.editItems.indexOf(ele);
    if (index > -1) {
      this.editItems.splice(index, 1);
      this.editItems = [...this.editItems];
      // Object.assign(ele, this.rows.at(index).value);
      if(!Object.keys(ele).length) {
        const dIndex =this.dataTable.indexOf(ele);
        if(dIndex > -1) {
          this.dataTable.splice(dIndex, 1);
          this.dataTable = this.dataTable.slice();
          this.table.renderRows();
        }
      }
      this.saveRow.emit(this.rows.at(index));
      this.rows.removeAt(index);
      this.readySpanData(0, this.dataTable.length);
      let ind = index;
      while(this.editObservables.has(ind+1)) {
        this.editObservables.set(ind, this.editObservables.get(ind+1));
        ind++;
      }
      this.editObservables.delete(ind);
    }
  }

  cancelRowClick(ele: any) {
    const index = this.editItems.indexOf(ele);
    if (index > -1) {
      this.editItems.splice(index, 1);
      this.editItems = [...this.editItems];
      if(!Object.keys(ele).length) {
        const dIndex =this.dataTable.indexOf(ele);
        if(dIndex > -1) {
          this.dataTable.splice(dIndex, 1);
          this.dataTable = this.dataTable.slice();
          this.table.renderRows();
        }
      }
      this.rows.removeAt(index);
      this.readySpanData(0, this.dataTable.length);
      let ind = index;
      while(this.editObservables.has(ind+1)) {
        this.editObservables.set(ind, this.editObservables.get(ind+1));
        ind++;
      }
      this.editObservables.delete(ind);
    }
  }

  addRowGroup(obj: any) {
    const row = this.fb.group({});
    // this.oneColumns.forEach(col => {
    //   row.addControl(col.key, this.fb.control(obj[col.key]));
    // });
    const temp = new Map<string, BehaviorSubject<KklSelectOption[]>>();
    this.editObservables.set(this.editItems.length, temp);
    setControls(this.oneColumns, row, this.fb, temp);
    row.setValue(obj);
    this.rows.push(row);
  }

  addNewRowGroup() {
    const row = this.fb.group({});
    // this.oneColumns.forEach(col => {
    //   row.addControl(col.key, this.fb.control(null));
    // })
    const temp = new Map<string, BehaviorSubject<KklSelectOption[]>>();
    this.editObservables.set(this.editItems.length, temp);
    setControls(this.oneColumns, row, this.fb, temp);
    this.rows.push(row);
    const rowData: any = {} as any;
    this.editItems = [...this.editItems, rowData];
    this.dataTable.unshift(rowData);
    this.dataTable = [...this.dataTable]
  }

  readySpanData(offset:number, pageEnd:number) {
    this.lastSpan = undefined;
    this.spans = [];
    this.oneColumns.forEach(element => {
      if(element.group === element.key) {
        this.spanRowData((d:any) => d[element.key], element.key, offset, pageEnd);
        this.lastSpan = element.key;
      }
    });
  }

  spanRowData(accessor: any, key: any, offset:number, pageEnd:number) {
    if(this.lastSpan) {
      var start: number = 0;
      var end: number = this.spans[0]? this.spans[0][this.lastSpan] : 0;
      while (end < pageEnd) {
        this.spanWorkData(accessor, key, start, end, offset);
        start = end;
        end += this.spans[start][this.lastSpan];
      }
      this.spanWorkData(accessor, key, start, pageEnd, offset);
    } else {
      this.spanWorkData(accessor, key, 0, pageEnd, offset);
    }
  }
  spanWorkData(accessor: any, key: any, start:number, end:number, offset: number) {
    for (let i = start; i < end;) {
      let currentValue = accessor(this.dataTable[i+offset]);
      let count = 1;

      if(!this.editItems.includes(this.dataTable[i+offset]) && this.expandedElement !== this.dataTable[i+offset]) {
        for (let j = i + 1; j < end; j++) {
          if(JSON.stringify(currentValue) !== JSON.stringify(accessor(this.dataTable[j+offset])) || this.editItems.includes(this.dataTable[j+offset]) || this.expandedElement == this.dataTable[j+offset]) {
            break;
          }
          count++;
        }
      }
      if (!this.spans[i]) {
        this.spans[i] = {};
      }
      this.spans[i][key] = count;
      i += count;
    }

  }

  dropTable(event: CdkDragDrop<any[]>) {
    this.dragDisabled = true;

    // if(this.paging){
    //   let cutOut = this.dataTable.data.splice(this.paginator.pageIndex*this.paginator.pageSize + event.previousIndex, 1) [0]; // cut the element at index 'from'
    //   this.dataTable.data.splice(this.paginator.pageIndex*this.paginator.pageSize + event.currentIndex, 0, cutOut);
    // } else {
    //   let cutOut = this.dataTable.data.splice(event.previousIndex, 1) [0]; // cut the element at index 'from'
    //   this.dataTable.data.splice(event.currentIndex, 0, cutOut);
    // }
    // this.dataTable = this.dataTable.slice();
    moveItemInArray(this.dataTable, event.previousIndex, event.currentIndex);
    this.table.renderRows();
    this.readySpanData(0, this.dataTable.length);
  }

  putOptions() {
    if(this.currentEditRow == -1) {
      this.myOptions.forEach(b => {
        (this.localObservables.get(b.key))?.next(b.val);
      });
    } else{
      const temp = this.editObservables.get(this.currentEditRow);
      this.myOptions.forEach(b => {
        (temp?.get(b.key))?.next(b.val);
      });
    }
  }

  onRowEditChange(ind: number | any) {
    if(ind !== -1) {
      this.currentEditRow = this.editItems.indexOf(ind);
    } else {
      this.currentEditRow = ind;
    }
  }


  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

}
