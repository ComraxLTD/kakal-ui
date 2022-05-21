import { trigger, state, style, transition, animate } from '@angular/animations';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { setControls } from '../../../mei-services/services/form-create';
import { ControlBase } from '../../../mei-form/models/control.model';
import { KklSelectOption } from '../../../mei-form/models/kkl-select.model';
import { OptionsModel } from '../../../mei-form/models/options.model';
import { RowActionEvent, RowActionModel, RowExpandEvent } from '../../../kkl-table/models/table-actions.model';
import { TableBase } from '../../../kkl-table/models/table.model';
import { customFilterPredicate } from './local-filter';
import { DialogService } from '../../../dialog/dialog.service';
import { BreakpointService, RouterService } from '../../../../services/services';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

const normalActions = ['inlineEdit', 'inlineDelete', 'inlineExpand', 'inlineNavigation'];

@Component({
  selector: 'kkl-ngx-local-table',
  templateUrl: '../all-tabels/all-table.component.html',
  styleUrls: ['../all-tabels/all-table.component.scss'],
})
export class NgxLocalTableComponent implements OnInit, AfterViewInit {
  ColumnMode = ColumnMode;
  @ViewChild('myTable') ngxTable: DatatableComponent;
  @ViewChild('myExpand') myExpand!: ElementRef;
  expandHeight: number = 0;


  @ViewChild('myIdentifier')
  myIdentifier: ElementRef;

  @Input() noMobile: boolean = false;
  currentEditRow: number = -1;
  destroySubject$: Subject<void> = new Subject();


  isLoading: boolean = true;

  @Output() actionClicked = new EventEmitter<RowActionEvent>();
  @Output() deleteRow = new EventEmitter<any>();
  @Output() saveRow = new EventEmitter<any>();
  @Output() expandRow = new EventEmitter<RowExpandEvent>();

  @Input() expandTemplate: TemplateRef<any> | undefined;

  @Input() colsTemplate: any;

  @Input() newRowAction: string;

  @Input() paging: boolean = true;

  dragable: boolean;
  @Input() set draggable(val: boolean) {
    this.dragable = val;
  }

  dragDisabled = true;

  oneColumns: TableBase[];
  @Input()
  set columns(value: TableBase[]) {
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
    // const row = this.fb.group({});
    // this.oneColumns.forEach(col => {
    //   row.addControl(col.key, this.fb.control(null));
    // })
    // this.searchRow = row;
  }


  dataTable: any[];

  @Input() set dataSource(value: any[]) {
    if(value) {
      this.dataTable = value;
      this.isLoading = false;
    }
    else {
      this.dataTable = [];
    }
  }


  localButtons: RowActionModel[];
  @Input() set rowActions(val: RowActionModel[]) {
    this.localButtons = val;
  }

  editItems: any[] = [];
  rows: FormArray = this.fb.array([]);
  @Input() searchRow: FormGroup;
  form: FormGroup;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;




  isDesktop: boolean = true;



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
  }








  constructor(private fb: FormBuilder, private dialogService: DialogService, private breakpointService: BreakpointService,
    private routerService: RouterService) {
  }

  ngAfterViewInit() {
    this.putOptions();
    setTimeout(() => {
      const size = this.myIdentifier.nativeElement.offsetWidth;
      if(size <= 600 && !this.noMobile) {
        this.isDesktop = false;
      } else {
        this.isDesktop = true;
      }
    }, 0);
  }

  searchChanged() {
    this.connectFilters(this.oneColumns);
  }
  searchFiltersChanged(arr: TableBase[]) {
    this.connectFilters(this.oneColumns.concat(arr));
    this.currentEditRow = -1;
  }
  connectFilters(arr: TableBase[]) {
    const searchVal = this.searchRow.value;
    let filters = [];
    const keys = [];
    arr.forEach(a => {
      if(searchVal[a.key] && !keys.includes(a.key)){
        keys.push(a.key);
        filters.push({key: a.key, controlType: a.controlType, val: searchVal[a.key]});
      }
    });
    // this.dataTable.filter = JSON.stringify(filters);
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
          break;
        case 'inlineExpand':
          this.expandRow.emit({row: obj, key: key});
          this.addExpandedRow(obj);
          break;
        case 'inlineNavigation':
          const url = this.routerService.getUrl(butt.navigation);
          this.routerService.navigate(url);
          break;
        default:
          break;
      }
    } else {
      this.actionClicked.emit({action: butt.type, row: obj, key: key});
    }
  }

  addExpandedRow(obj: any) {
    this.ngxTable.rowDetail.toggleExpandRow(obj);
    setTimeout(() => {
      this.onResizeExpand();
    }, 300);
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
      if(!Object.keys(ele).length) {
        const dIndex = this.dataTable.indexOf(ele);
        if(dIndex > -1) {
          this.dataTable.splice(dIndex, 1);
          this.dataTable = this.dataTable.slice();
          this.ngxTable.recalculate();
        }
      }
      // Object.assign(ele, this.rows.at(index).value);
      this.saveRow.emit(this.rows.at(index));
      this.rows.removeAt(index);
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
          this.ngxTable.recalculate();
        }
      }
      this.rows.removeAt(index);
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
    row.patchValue(obj);
    this.rows.push(row);
    this.editItems = [...this.editItems, obj];
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
    this.dataTable = [...this.dataTable];
  }




  dropTable(event: CdkDragDrop<MatTableDataSource<any>, any>) {
    this.dragDisabled = true;

    if(this.paging){
      let cutOut = this.dataTable.splice(this.paginator.pageIndex*this.paginator.pageSize + event.previousIndex, 1) [0]; // cut the element at index 'from'
      this.dataTable.splice(this.paginator.pageIndex*this.paginator.pageSize + event.currentIndex, 0, cutOut);
    } else {
      let cutOut = this.dataTable.splice(event.previousIndex, 1) [0]; // cut the element at index 'from'
      this.dataTable.splice(event.currentIndex, 0, cutOut);
    }
    this.dataTable = this.dataTable.slice();
    // moveItemInArray(this.dataTable.data, event.previousIndex, event.currentIndex);
    this.ngxTable.recalculate();
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


  onResize(event) {
    const size = event.newRect.width;
    if(size <= 600 && !this.noMobile) {
      this.isDesktop = false;
    } else {
      this.isDesktop = true;
    }
    this.onResizeExpand();
  }
  onResizeExpand(){
    this.expandHeight = this.myExpand?.nativeElement.offsetHeight;
    this.dataTable = [...this.dataTable];
  }


  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }



  onPage(event) {
    // clearTimeout(this.timeout);
    // this.timeout = setTimeout(() => {
      console.log('paged!', event);
    // }, 100);
  }


}
