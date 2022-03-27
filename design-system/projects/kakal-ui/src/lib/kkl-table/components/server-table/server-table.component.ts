import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subject, takeUntil } from 'rxjs';

const normalActions = ['inlineEdit', 'inlineDelete', 'inlineExpand'];

@Component({
  selector: 'kkl-server-table',
  templateUrl: './server-table.component.html',
  styleUrls: ['./server-table.component.scss'],
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

  @Output() buttClicked = new EventEmitter<any>();
  @Output() deleteRow = new EventEmitter<any>();
  @Output() editRow = new EventEmitter<any>();
  @Output() expandRow = new EventEmitter<any>();
  @Output() requestChanged = new EventEmitter<any>();


  @Input() expandTemplate: TemplateRef<any> | undefined;

  @Input() newRowAction: any;

  @Input() paging: boolean = true;

  oneColumns: any[] = [];
  @Input() set columns(value: any[]) {
    this.oneColumns = value;
    this.displayedColumns = value.map(a => a.key);
  }


  dataTable: any[] = undefined;
  @Input() set dataSource(value: any[]) {
    if(value) {
      this.dataTable = value;
      this.readySpanData(0, this.dataTable.length);
    } else {
      this.dataTable = [];
    }
  }


  localButtons: any[];
  @Input() set rowActions(val: any[]) {
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

  constructor(private fb: FormBuilder) {
  }

  ngAfterViewInit() {
    if(this.paging) {
      this.paginator.page.pipe(takeUntil(this.destroySubject$)).subscribe(pag => {
        this.requestChanged.emit({page: pag.pageIndex, pageSize: pag.pageSize});
        this.cleanPreLoading();
      });
    }
    this.sort.sortChange.pipe(takeUntil(this.destroySubject$)).subscribe((sor: any) => {
      this.requestChanged.emit({page: 0, pageSize: this.paginator.pageSize, sort: sor});
      this.cleanPreLoading();
    });
  }

  cleanPreLoading() {
    this.editItems = [];
    this.expandedElement = undefined;
    this.rows.clear();
    this.dataTable = undefined;
  }

  buttonClick(butt: any, obj:any) {
    if(normalActions.includes(butt.type)) {
      switch (butt.type) {
        case 'inlineDelete':
          this.dataTable = this.dataTable.filter((a:any) => a !== obj);
          this.deleteRow.emit(obj);
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
      this.buttClicked.emit({action: butt.type, row: obj});
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