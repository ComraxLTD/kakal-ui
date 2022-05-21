import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { setControls } from '../../../mei-services/services/form-create';
import { ControlBase } from '../../../mei-form/models/control.model';
import { KklSelectOption } from '../../../mei-form/models/kkl-select.model';
import { OptionsModel } from '../../../mei-form/models/options.model';
import {
  RowActionEvent,
  RowActionModel,
  RowExpandEvent,
} from '../../models/table-actions.model';
import { TableBase } from '../../models/table.model';
import { customFilterPredicate } from './local-filter';
import { DialogService } from '../../../dialog/dialog.service';
import {
  BreakpointService,
  RouterService,
} from '../../../../services/services';

const normalActions = [
  'inlineEdit',
  'inlineDelete',
  'inlineExpand',
  'inlineNavigation',
];

@Component({
  selector: 'kkl-local-table',
  templateUrl: '../all-tabels/all-table.component.html',
  styleUrls: ['../all-tabels/all-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class LocalTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild('myIdentifier')
  myIdentifier: ElementRef;

  @Input() noMobile: boolean = false;
  typeLocal: boolean = true;
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
    if (val) {
      if (!this.displayedColumns.includes('dragHandeler')) {
        this.displayedColumns.unshift('dragHandeler');
      }
    } else {
      if (this.displayedColumns.includes('dragHandeler')) {
        const index = this.displayedColumns.indexOf('dragHandeler');
        if (index > -1) {
          this.displayedColumns.splice(index, 1);
        }
      }
    }
    this.dragable = val;
  }

  dragDisabled = true;

  oneColumns: TableBase[];
  @Input()
  set columns(value: TableBase[]) {
    if (this.oneColumns && this.searchRow) {
      const newVals: TableBase[] = [];
      const sameVals: TableBase[] = [];
      value.forEach((a) => {
        if (
          this.oneColumns.find(
            (vendor) => Object.assign(vendor) === Object.assign(a)
          )
        ) {
          sameVals.push(
            this.oneColumns.find(
              (vendor) => Object.assign(vendor) === Object.assign(a)
            )
          );
        } else {
          newVals.push(a);
        }
      });
      const removed = this.oneColumns.filter((b) => !sameVals.includes(b));
      removed.forEach((c) => {
        this.searchRow.removeControl(c.key);
        this.rows.controls.forEach((d) => {
          (d as FormGroup).removeControl(c.key);
        });
      });
      setControls(newVals, this.searchRow, this.fb, this.localObservables);
      this.rows.controls.forEach((h, index) => {
        setControls(
          newVals,
          h as FormGroup,
          this.fb,
          this.editObservables.get(index)
        );
      });
    }
    this.oneColumns = value;
    this.displayedColumns = value.map((a) => a.key);
    if (this.localButtons?.length) {
      this.displayedColumns.push('actions');
    }
    if (this.dragable) {
      this.displayedColumns.unshift('dragHandeler');
    }
    // const row = this.fb.group({});
    // this.oneColumns.forEach(col => {
    //   row.addControl(col.key, this.fb.control(null));
    // })
    // this.searchRow = row;
  }

  dataTable: MatTableDataSource<any[]> = new MatTableDataSource();

  @Input() set dataSource(value: any[]) {
    if (value) {
      this.dataTable.data = value;
      if (this.paginator) {
        if (this.paging) {
          this.readySpanData(
            0,
            Math.min(
              this.paginator.pageSize,
              this.dataTable.filteredData.length
            )
          );
        } else {
          this.readySpanData(0, this.dataTable.filteredData.length);
        }
      }
      this.isLoading = false;
    } else {
      this.dataTable.data = [];
    }
  }

  localButtons: RowActionModel[];
  @Input() set rowActions(val: RowActionModel[]) {
    if (val?.length) {
      if (!this.displayedColumns.includes('actions')) {
        this.displayedColumns.push('actions');
      }
    } else {
      if (this.displayedColumns.includes('actions')) {
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

  isDesktop: boolean = true;

  myOptions: OptionsModel[] = [];
  @Input() set options(val: OptionsModel[]) {
    if (val) {
      this.myOptions = val;
      if (this.form) {
        this.putOptions();
      }
    }
  }

  localObservables: Map<string, BehaviorSubject<KklSelectOption[]>> = new Map<
    string,
    BehaviorSubject<KklSelectOption[]>
  >();
  editObservables: Map<
    number,
    Map<string, BehaviorSubject<KklSelectOption[]>>
  > = new Map<number, Map<string, BehaviorSubject<KklSelectOption[]>>>();

  ngOnInit(): void {
    if (!this.searchRow) {
      this.searchRow = this.fb.group({});
    }
    this.form = this.fb.group({ myRows: this.rows, search: this.searchRow });
    setControls(
      this.oneColumns,
      this.searchRow,
      this.fb,
      this.localObservables
    );
  }

  constructor(
    private fb: FormBuilder,
    private dialogService: DialogService,
    private breakpointService: BreakpointService,
    private routerService: RouterService
  ) {}

  ngAfterViewInit() {
    this.dataTable.sort = this.sort;
    if (this.paging) {
      this.dataTable.paginator = this.paginator;
      this.sort.sortChange
        .pipe(takeUntil(this.destroySubject$))
        .subscribe((sor: any) => {
          this.filteredDataSort(sor);
          if (this.paginator.pageIndex === 0) {
            this.paginator.firstPage();
          }
          this.readySpanData(
            0,
            Math.min(
              this.paginator.pageSize,
              this.dataTable.filteredData.length
            )
          );
        });
      this.readySpanData(
        0,
        Math.min(this.paginator.pageSize, this.dataTable.filteredData.length)
      );
    } else {
      this.sort.sortChange
        .pipe(takeUntil(this.destroySubject$))
        .subscribe((sor: any) => {
          this.filteredDataSort(sor);
          this.readySpanData(0, this.dataTable.filteredData.length);
        });
      this.readySpanData(0, this.dataTable.filteredData.length);
    }
    this.dataTable.filterPredicate = customFilterPredicate;
    this.putOptions();
    setTimeout(() => {
      const size = this.myIdentifier.nativeElement.offsetWidth;
      if (size <= 600 && !this.noMobile) {
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
    arr.forEach((a) => {
      if (searchVal[a.key] && !keys.includes(a.key)) {
        keys.push(a.key);
        filters.push({
          key: a.key,
          controlType: a.controlType,
          val: searchVal[a.key],
        });
      }
    });
    this.dataTable.filter = JSON.stringify(filters);
  }

  pageChanged(event: PageEvent) {
    this.readySpanData(
      event.pageIndex * event.pageSize,
      Math.min(
        (event.pageIndex + 1) * event.pageSize,
        this.dataTable.filteredData.length
      ) -
        event.pageIndex * event.pageSize
    );
  }

  filteredDataSort(sor: any) {
    if (sor.direction === 'asc') {
      this.dataTable.filteredData.sort((a, b) => {
        if (a[sor.active] > b[sor.active]) {
          return 1;
        } else if (a[sor.active] < b[sor.active]) {
          return -1;
        }
        return 0;
      });
    } else {
      this.dataTable.filteredData.sort((a, b) => {
        if (a[sor.active] > b[sor.active]) {
          return -1;
        } else if (a[sor.active] < b[sor.active]) {
          return 1;
        }
        return 0;
      });
    }
  }

  buttonClick(butt: RowActionModel, obj: any, key: string) {
    if (normalActions.includes(butt.type)) {
      switch (butt.type) {
        case 'inlineDelete':
          this.dialogService
            .openAlert({
              message: 'האם אתה בטוח שאתה רוצה למחוק?',
              isConfirm: true,
            })
            .afterClosed()
            .subscribe((result) => {
              if (result) {
                this.deleteRow.emit(obj);
              }
            });
          break;
        case 'inlineEdit':
          this.addRowGroup(obj);
          break;
        case 'inlineExpand':
          this.expandRow.emit({ row: obj, key: key });
          this.addExpandedRow(obj);
          break;
        case 'inlineNavigation':
          const url = this.routerService.getUrl(butt.navigation);
          this.routerService.navigate(url);
          break;
        default:
          break;
      }
      this.groupDataReload();
    } else {
      this.actionClicked.emit({ action: butt.type, row: obj, key: key });
    }
  }

  addExpandedRow(obj: any) {
    this.expandedElement = this.expandedElement == obj ? null : obj;
  }

  onExpandOut(obj: any) {
    if (this.rowActions?.some((a) => a.type == 'inlineExpand')) {
      this.addExpandedRow(obj);
    }
  }

  saveRowClick(ele: any) {
    const index = this.editItems.indexOf(ele);
    if (index > -1) {
      this.editItems.splice(index, 1);
      this.editItems = [...this.editItems];
      if (!Object.keys(ele).length) {
        const dIndex = this.dataTable.data.indexOf(ele);
        if (dIndex > -1) {
          this.dataTable.data.splice(dIndex, 1);
          this.dataTable.data = this.dataTable.data.slice();
          this.table.renderRows();
        }
      }
      this.groupDataReload();
      // Object.assign(ele, this.rows.at(index).value);
      this.saveRow.emit(this.rows.at(index));
      this.rows.removeAt(index);
      let ind = index;
      while (this.editObservables.has(ind + 1)) {
        this.editObservables.set(ind, this.editObservables.get(ind + 1));
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
      if (!Object.keys(ele).length) {
        const dIndex = this.dataTable.data.indexOf(ele);
        if (dIndex > -1) {
          this.dataTable.data.splice(dIndex, 1);
          this.dataTable.data = this.dataTable.data.slice();
          this.table.renderRows();
        }
      }
      this.groupDataReload();
      this.rows.removeAt(index);
      let ind = index;
      while (this.editObservables.has(ind + 1)) {
        this.editObservables.set(ind, this.editObservables.get(ind + 1));
        ind++;
      }
      this.editObservables.delete(ind);
    }
  }

  groupDataReload() {
    if (this.paging) {
      this.readySpanData(
        this.paginator.pageIndex * this.paginator.pageSize,
        Math.min(
          (this.paginator.pageIndex + 1) * this.paginator.pageSize,
          this.dataTable.filteredData.length
        ) -
          this.paginator.pageIndex * this.paginator.pageSize
      );
    } else {
      this.readySpanData(0, this.dataTable.filteredData.length);
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
    this.dataTable.data.unshift(rowData);
    this.dataTable.data = [...this.dataTable.data];
  }

  readySpanData(offset: number, pageEnd: number) {
    this.lastSpan = undefined;
    this.spans = [];
    this.oneColumns.forEach((element) => {
      if (element.group === element.key) {
        this.spanRowData(
          (d: any) => d[element.key],
          element.key,
          offset,
          pageEnd
        );
        this.lastSpan = element.key;
      }
    });
  }

  spanRowData(accessor: any, key: any, offset: number, pageEnd: number) {
    if (this.lastSpan) {
      var start: number = 0;
      var end: number = this.spans[0] ? this.spans[0][this.lastSpan] : 0;
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
  spanWorkData(
    accessor: any,
    key: any,
    start: number,
    end: number,
    offset: number
  ) {
    for (let i = start; i < end; ) {
      let currentValue = accessor(this.dataTable.filteredData[i + offset]);
      let count = 1;

      if (
        !this.editItems.includes(this.dataTable.filteredData[i + offset]) &&
        this.expandedElement !== this.dataTable.filteredData[i + offset]
      ) {
        for (let j = i + 1; j < end; j++) {
          if (
            JSON.stringify(currentValue) !==
              JSON.stringify(
                accessor(this.dataTable.filteredData[j + offset])
              ) ||
            this.editItems.includes(this.dataTable.filteredData[j + offset]) ||
            this.expandedElement == this.dataTable.filteredData[j + offset]
          ) {
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

  dropTable(event: CdkDragDrop<MatTableDataSource<any>, any>) {
    this.dragDisabled = true;

    if (this.paging) {
      let cutOut = this.dataTable.data.splice(
        this.paginator.pageIndex * this.paginator.pageSize +
          event.previousIndex,
        1
      )[0]; // cut the element at index 'from'
      this.dataTable.data.splice(
        this.paginator.pageIndex * this.paginator.pageSize + event.currentIndex,
        0,
        cutOut
      );
    } else {
      let cutOut = this.dataTable.data.splice(event.previousIndex, 1)[0]; // cut the element at index 'from'
      this.dataTable.data.splice(event.currentIndex, 0, cutOut);
    }
    this.dataTable.data = this.dataTable.data.slice();
    // moveItemInArray(this.dataTable.data, event.previousIndex, event.currentIndex);
    this.groupDataReload();
    this.table.renderRows();
  }

  putOptions() {
    if (this.currentEditRow == -1) {
      this.myOptions.forEach((b) => {
        this.localObservables.get(b.key)?.next(b.val);
      });
    } else {
      const temp = this.editObservables.get(this.currentEditRow);
      this.myOptions.forEach((b) => {
        temp?.get(b.key)?.next(b.val);
      });
    }
  }

  onRowEditChange(ind: number | any) {
    if (ind !== -1) {
      this.currentEditRow = this.editItems.indexOf(ind);
    } else {
      this.currentEditRow = ind;
    }
  }

  onResize(event) {
    const size = event.newRect.width;
    if (size <= 600 && !this.noMobile) {
      this.isDesktop = false;
    } else {
      this.isDesktop = true;
    }
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }
}
