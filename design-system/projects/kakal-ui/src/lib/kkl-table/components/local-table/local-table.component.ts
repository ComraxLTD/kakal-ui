import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { RowActionEvent, RowActionModel } from '../../table-actions.model';
import { TableBase } from '../../table.model';

const normalActions = ['inlineEdit', 'inlineDelete', 'inlineExpand'];

@Component({
  selector: 'kkl-local-table',
  templateUrl: './local-table.component.html',
  styleUrls: ['./local-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class LocalTableComponent implements OnInit {
  destroySubject$: Subject<void> = new Subject();

  isLoading: boolean = true;

  @Output() actionClicked = new EventEmitter<RowActionEvent>();
  @Output() deleteRow = new EventEmitter<any>();
  @Output() editRow = new EventEmitter<any>();

  @Input() expandTemplate: TemplateRef<any> | undefined;

  @Input() colsTemplate: any;

  @Input() newRowAction: RowActionModel;

  @Input() paging: boolean = true;

  oneColumns: TableBase[] = [];
  @Input() set columns(value: TableBase[]) {
    this.oneColumns = value;
    this.displayedColumns = value.map(a => a.key);
  }


  dataTable: MatTableDataSource<any[]> = new MatTableDataSource();
  @Input() set dataSource(value: any[]) {
    if(value) {
      this.dataTable.data = value;
      if(this.paginator) {
        if(this.paging) {
          this.readySpanData(0, Math.min(this.paginator.pageSize, this.dataTable.filteredData.length));
        } else {
          this.readySpanData(0, this.dataTable.filteredData.length);
        }
      }
    } else {
      this.dataTable.data = [];
    }
    this.isLoading = false;
  }


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

  constructor(private fb: FormBuilder) {
  }

  ngAfterViewInit() {
    this.dataTable.sort = this.sort;
    if(this.paging) {
      this.dataTable.paginator = this.paginator;
      this.paginator.page.pipe(takeUntil(this.destroySubject$)).subscribe(pag => {
        this.readySpanData(pag.pageIndex*pag.pageSize, Math.min((pag.pageIndex+1)*pag.pageSize, this.dataTable.filteredData.length) - pag.pageIndex*pag.pageSize);
      });
      this.sort.sortChange.pipe(takeUntil(this.destroySubject$)).subscribe((sor: any) => {
        this.filteredDataSort(sor);
        if(this.paginator.pageIndex === 0) {
          this.readySpanData(0, Math.min(this.paginator.pageSize, this.dataTable.filteredData.length));
        } else {
          this.paginator.firstPage();
        }
      });
      this.readySpanData(0, Math.min(this.paginator.pageSize, this.dataTable.filteredData.length));
    } else {
      this.sort.sortChange.pipe(takeUntil(this.destroySubject$)).subscribe((sor: any) => {
        this.filteredDataSort(sor);
        this.readySpanData(0, this.dataTable.filteredData.length);
      });
      this.readySpanData(0, this.dataTable.filteredData.length);
    }
  }

  filteredDataSort(sor: any) {
    if(sor.direction === 'asc') {
      this.dataTable.filteredData.sort((a, b) => {
        if(a[sor.active] > b[sor.active]) {
          return 1;
        } else if(a[sor.active] < b[sor.active]) {
          return -1;
        }
        return 0;
      });
    } else {
      this.dataTable.filteredData.sort((a, b) => {
        if(a[sor.active] > b[sor.active]) {
          return -1;
        } else if(a[sor.active] < b[sor.active]) {
          return 1;
        }
        return 0;
      });
    }
  }

  buttonClick(butt: RowActionModel, obj:any) {
    if(normalActions.includes(butt.type)) {
      switch (butt.type) {
        case 'inlineDelete':
          if(confirm("Are you sure you want to delete?")) {
            this.dataTable.data = this.dataTable.data.filter((a:any) => a !== obj);
            this.deleteRow.emit(obj);
          }
          break;
        case 'inlineEdit':
          this.addRowGroup(obj);
          this.editItems = [...this.editItems, obj];
          break;
        case 'inlineExpand':
          this.expandedElement = this.expandedElement == obj? null : obj;
          break;
        default:
          break;
      }
      this.groupDataReload();
    } else {
      this.actionClicked.emit({action: butt.type, row: obj});
    }
  }

  saveRowClick(ele: any) {
    const index = this.editItems.indexOf(ele);
    if (index > -1) {
      this.editItems.splice(index, 1);
      this.editItems = [...this.editItems];
      this.groupDataReload();
      Object.assign(ele, this.rows.at(index).value);
      this.editRow.emit(ele);
      this.rows.removeAt(index);
    }
  }

  groupDataReload() {
    if(this.paging){
      this.readySpanData(this.paginator.pageIndex*this.paginator.pageSize, Math.min((this.paginator.pageIndex+1)*this.paginator.pageSize, this.dataTable.filteredData.length) - this.paginator.pageIndex*this.paginator.pageSize);
    } else {
      this.readySpanData(0, this.dataTable.filteredData.length);
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
    this.dataTable.data.unshift(rowData);
    this.dataTable.data = [...this.dataTable.data]
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
      let currentValue = accessor(this.dataTable.filteredData[i+offset]);
      let count = 1;

      if(!this.editItems.includes(this.dataTable.filteredData[i+offset]) && this.expandedElement !== this.dataTable.filteredData[i+offset]) {
        for (let j = i + 1; j < end; j++) {
          if(JSON.stringify(currentValue) !== JSON.stringify(accessor(this.dataTable.filteredData[j+offset])) || this.editItems.includes(this.dataTable.filteredData[j+offset]) || this.expandedElement == this.dataTable.filteredData[j+offset]) {
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
