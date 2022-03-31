import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subject, take, takeUntil } from 'rxjs';
import { RowActionEvent, RowActionModel } from '../../table-actions.model'
import { TableBase } from '../../table.model';

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
export class ServerTableComponent implements OnInit {
  destroySubject$: Subject<void> = new Subject();

  isLoading: boolean = true;

  @Output() actionClicked = new EventEmitter<RowActionEvent>();
  @Output() deleteRow = new EventEmitter<any>();
  @Output() editRow = new EventEmitter<any>();
  @Output() expandRow = new EventEmitter<any>();


  @Input() expandTemplate: TemplateRef<any> | undefined;

  @Input() colsTemplate: any;

  @Input() newRowAction: string;

  @Input() paging: boolean = true;
  @Input() pageSize: number = 10;

  oneColumns: TableBase[] = [];
  @Input() set columns(value: TableBase[]) {
    this.oneColumns = value;
    this.displayedColumns = value.map(a => a.key);
  }


  dataTable: any[] = undefined;
  @Input() dataSourceUrl: string;


  localButtons: RowActionModel[];
  @Input() set rowActions(val: RowActionModel[]) {
    if(val.length && !this.displayedColumns.includes('actions')) {
      this.displayedColumns.push('actions');
    }
    this.localButtons = val;
  }

  displayedColumns: string[] = [];

  editItems: any[] = [];
  rows: FormArray = this.fb.array([]);
  form: FormGroup = this.fb.group({ 'myRows': this.rows });

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  expandedElement: any;

  lastSpan: string | undefined;
  spans: any[] = [];


  ngOnInit() {
  }

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  ngAfterViewInit() {
    if(this.paging) {
      this.paginator.pageSize = this.pageSize;
    }
    this.sort.sortChange.pipe(takeUntil(this.destroySubject$)).subscribe((sor: any) => {
      this.getData(0, this.paginator.pageSize, sor);
      this.paginator.pageIndex = 0;
      this.cleanPreLoading();
    });
    this.getData(0, this.paginator.pageSize, undefined);
  }


  getData(page: number, pageSize: number, sort: any) {
    let params = new HttpParams()
    .set('page', page)
    .set('pageSize', pageSize)
    .set('sort', sort);
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
  pageChanged(event: PageEvent) {
    this.getData(event.pageIndex, event.pageSize, undefined);
    this.cleanPreLoading();
  }


  cleanPreLoading() {
    this.editItems = [];
    this.expandedElement = undefined;
    this.rows.clear();
    this.isLoading = false;
    this.dataTable = undefined;
  }

  buttonClick(butt: RowActionModel, obj:any) {
    if(normalActions.includes(butt.type)) {
      switch (butt.type) {
        case 'inlineDelete':
          if(confirm("Are you sure you want to delete?")) {
            this.dataTable = this.dataTable.filter((a:any) => a !== obj);
            this.deleteRow.emit(obj);
          }
          break;
        case 'inlineEdit':
          this.addRowGroup(obj);
          this.editItems = [...this.editItems, obj];
          break;
        case 'inlineExpand':
          this.expandRow.emit(obj);
          this.expandedElement = this.expandedElement == obj? null : obj;
          break;
        default:
          break;
      }
    } else {
      this.actionClicked.emit({action: butt.type, row: obj});
    }
  }

  saveRowClick(ele: any) {
    const index = this.editItems.indexOf(ele);
    if (index > -1) {
      this.editItems.splice(index, 1);
      this.editItems = [...this.editItems];
      Object.assign(ele, this.rows.at(index).value);
      this.editRow.emit(ele);
      this.rows.removeAt(index);
    }
  }

  addRowGroup(obj: any) {
    const row = this.fb.group({});
    this.oneColumns.forEach(col => {
      row.addControl(col.key, this.fb.control(obj[col.key]));
    });
    this.rows.push(row);
  }

  addNewRowGroup() {
    const row = this.fb.group({});
    this.oneColumns.forEach(col => {
      row.addControl(col.key, this.fb.control(null));
    })
    this.rows.push(row);
    const rowData: any = row.value;
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

  ngOnDestroy() {
    this.destroySubject$.next();
  }

}
