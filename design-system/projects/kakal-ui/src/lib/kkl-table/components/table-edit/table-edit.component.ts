import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';

const normalActions = ['inlineEdit', 'inlineDelete', 'inlinePrint', 'inlineExpand'];

@Component({
  selector: 'kkl-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableEditComponent implements OnInit {
  destroySubject$: Subject<void> = new Subject();

  @Output() buttClicked = new EventEmitter<any>();
  @Output() deleteRow = new EventEmitter<any>();
  @Output() editRow = new EventEmitter<any>();

  @Input() expandTemplate: TemplateRef<any> | undefined;

  @Input() addButton: any;

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

  dataTable: MatTableDataSource<any[]> = new MatTableDataSource();
  @Input() set dataSource(value: any[]) {
    if(value) {
      this.dataTable.data = value;
    } else {
      this.dataTable.data = [];
    }
  }

  oneColumns: any[] = [];
  @Input() set localColumns(value: any[]) {
    this.oneColumns = value;
  }
  @Input() buttons: any[] = [];

  ngOnInit() {
    this.displayedColumns = this.oneColumns.map(a => a.key);
    this.displayedColumns.push('actions');
  }

  constructor(private fb: FormBuilder) {
  }

  ngAfterViewInit() {
    this.dataTable.sort = this.sort;
    this.dataTable.paginator = this.paginator;
    this.paginator.page.pipe(takeUntil(this.destroySubject$)).subscribe(pag => {
      this.readySpanData(pag.pageIndex*pag.pageSize, Math.min((pag.pageIndex+1)*pag.pageSize, this.dataTable.filteredData.length) - pag.pageIndex*pag.pageSize);
    });
    this.sort.sortChange.pipe(takeUntil(this.destroySubject$)).subscribe((sor: any) => {
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
      if(this.paginator.pageIndex === 0) {
        this.readySpanData(0, Math.min(this.paginator.pageSize, this.dataTable.filteredData.length));
      } else {
        this.paginator.firstPage();
      }
    });
    this.readySpanData(0, Math.min(this.paginator.pageSize, this.dataTable.filteredData.length));
  }

  buttonClick(butt: any, obj:any) {
    if(normalActions.includes(butt.type)) {
      switch (butt.type) {
        case 'inlineDelete':
          this.dataTable.data = this.dataTable.data.filter((a:any) => a !== obj);
          this.deleteRow.emit(obj);
          this.readySpanData(this.paginator.pageIndex*this.paginator.pageSize, Math.min((this.paginator.pageIndex+1)*this.paginator.pageSize, this.dataTable.filteredData.length) - this.paginator.pageIndex*this.paginator.pageSize);
          break;
        case 'inlineEdit':
          this.addRowGroup(obj);
          this.editItems = [...this.editItems, obj];
          this.readySpanData(this.paginator.pageIndex*this.paginator.pageSize, Math.min((this.paginator.pageIndex+1)*this.paginator.pageSize, this.dataTable.filteredData.length) - this.paginator.pageIndex*this.paginator.pageSize);
          break;
        case 'inlineExpand':
          this.expandedElement = this.expandedElement == obj? null : obj;
          break;
        case 'inlinePrint':
          console.log('print');

          break
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
      this.readySpanData(this.paginator.pageIndex*this.paginator.pageSize, Math.min((this.paginator.pageIndex+1)*this.paginator.pageSize, this.dataTable.filteredData.length) - this.paginator.pageIndex*this.paginator.pageSize);
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

      if(!this.editItems.includes(this.dataTable.filteredData[i+offset])) {
        for (let j = i + 1; j < end; j++) {
          if(JSON.stringify(currentValue) !== JSON.stringify(accessor(this.dataTable.filteredData[j+offset])) || this.editItems.includes(this.dataTable.filteredData[j+offset])) {
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