import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import {
  RowActionEvent,
  RowActionModel,
  RowExpandEvent,
} from '../../../kkl-table/models/table-actions.model';
import { TableBase } from '../../../kkl-table/models/table.model';

import { DialogService } from '../../../dialog/dialog.service';
import { RouterService } from '../../../../services/services';

import { customFilterPredicate } from '../../../kkl-table/components/local-table/local-filter';

import { NgxPage } from '../../models/page';

import { Subject } from 'rxjs';
import { MatExpansionPanel } from '@angular/material/expansion';

const normalActions = [
  'inlineEdit',
  'inlineDelete',
  'inlineExpand',
  'inlineNavigation',
];

@Component({
  selector: 'kkl-ngx-local-table',
  templateUrl: '../all-tabels/all-table.component.html',
  styleUrls: ['../all-tabels/all-table.component.scss'],
})
export class NgxLocalTableComponent<T = any> implements OnInit, AfterViewInit {
  ColumnMode = ColumnMode;
  @ViewChild('tableRef') tableRef: DatatableComponent;

  // control the hight of expand panel
  @ViewChild('expandRef') expandRef!: ElementRef;
  expandHeight: number = 0;

  // control the size of div
  @ViewChild('wrapperRef') wrapperRef: ElementRef;
  @ViewChildren(MatExpansionPanel)
  matExpansionPanelElement: QueryList<MatExpansionPanel>;
  
  @Input() noMobile: boolean = false;
  destroySubject$: Subject<void> = new Subject();

  isLoading: boolean = true;

  @Output() actionClicked = new EventEmitter<RowActionEvent>();
  @Output() deleteRow = new EventEmitter<any>();
  @Output() saveRow = new EventEmitter<any>();
  @Output() expandRow = new EventEmitter<RowExpandEvent>();

  @Input() expandTemplate: TemplateRef<any> | undefined;
  expand: boolean = false;
  expanded: any[] = [];

  @Input() colsTemplate: any;

  @Input() newRowAction: string;

  @Input() paging: boolean = true;

  hasSummary: boolean = false;

  @Input() headline: string = 'Something';

  dragable: boolean;
  @Input() set draggable(val: boolean) {
    this.dragable = val;
  }
  dragDisabled = true;

  oneColumns: TableBase[];
  @Input()
  set columns(value: TableBase[]) {
    this.oneColumns = value;
    this.hasSummary = value.some((a) => a.sumFunc);
  }

  dataTable: T[];
  allData: T[];

  @Input() set dataSource(value: T[]) {
    if (value) {
      this.allData = [...value];
      this.dataTable = value;
      this.isLoading = false;
    } else {
      this.allData = [];
      this.dataTable = [];
    }
  }

  localButtons: RowActionModel[];
  @Input() set rowActions(val: RowActionModel[]) {
    this.localButtons = val;
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  searchRow = {};
  editItems : T[] = [];
  editItemsData : T[] = [];

  isDesktop: boolean = true;
  viewSize!: number;

  page = new NgxPage();

  constructor(
    private dialogService: DialogService,
    private routerService: RouterService
  ) {}

  ngOnInit(): void {
    if (
      this.localButtons?.some((a) => a.type === 'inlineExpand') ||
      this.oneColumns.some((a) => a.button?.type === 'inlineExpand')
    ) {
      this.expand = true;
    }

    this.page.pageIndex = 0;
    this.page.pageSize = this.paging ? 5 : this.dataTable.length;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const size = this.wrapperRef.nativeElement.offsetWidth;
      this.viewSize = Math.floor(size / 130);
      if (size <= 600 && !this.noMobile) {
        this.isDesktop = false;
      } else {
        this.isDesktop = true;
      }
    }, 0);
  }

  onFilterChanged(event, key) {
    this.searchRow[key] = event.value;
  }

  onSearchChanged() {
    this.connectFilters(this.oneColumns);
  }
  connectFilters(arr: TableBase[]) {
    const searchVal = this.searchRow;
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
    const temp = this.allData.filter((d) => {
      return customFilterPredicate(d, JSON.stringify(filters));
    });
    // update the rows
    this.dataTable = temp;
    // Whenever the filter changes, always go back to the first page
    this.tableRef.offset = 0;
  }

  onActionClicked(event: RowActionModel, row: T, key: string, rowIndex : number) {
    if (normalActions.includes(event.type)) {
      switch (event.type) {
        case 'inlineDelete':
          this.dialogService
            .openAlert({
              message: 'האם אתה בטוח שאתה רוצה למחוק?',
              isConfirm: true,
            })
            .afterClosed()
            .subscribe((result) => {
              if (result) {
                this.deleteRow.emit(row);
              }
            });
          break;
        case 'inlineEdit':
          this.onEditEvent(row, rowIndex);
          break;
        case 'inlineExpand':
          this.expandRow.emit({ row: row, key: key });
          this.onExpandEvent(row);
          break;
        case 'inlineNavigation':
          const url = this.routerService.getUrl(event.navigation);
          this.routerService.navigate(url);
          break;
        default:
          break;
      }
    } else {
      this.actionClicked.emit({ action: event.type, row: row, key: key });
    }
  }

  onExpandEvent(row: T) {
    this.tableRef.rowDetail.toggleExpandRow(row);
    const ind = this.expanded.indexOf(row);
    if (ind == -1) {
      this.expanded.push(row);
      this.expanded = [...this.expanded];
    } else {
      this.expanded.splice(ind, 1);
      this.expanded = [...this.expanded];
    }
    setTimeout(() => {
      this.onResizeExpand();
    }, 300);
  }

  onSaveEvent(row: T, rowIndex : number) {
    const index = this.editItems.indexOf(row);
    this.editItems.splice(index, 1);
    this.editItems = [...this.editItems];
    this.saveRow.emit(this.editItemsData.splice(index, 1)[0]);
    this.editItemsData = [...this.editItemsData];

    if (!Object.keys(row).length) {
      const dIndex = this.dataTable.indexOf(row);
      if (dIndex > -1) {
        this.dataTable.splice(dIndex, 1);
        this.dataTable = this.dataTable.slice();
        // this.tableRef.recalculate();
      }
    }
  }

  onCancelEvent(row: T, rowIndex : number) {
    const index = this.editItems.indexOf(row);
    this.editItems.splice(index, 1);
    this.editItems = [...this.editItems];
    this.editItemsData.splice(index, 1);
    this.editItemsData = [...this.editItemsData];

    if (!Object.keys(row).length) {
      const dIndex = this.dataTable.indexOf(row);
      if (dIndex > -1) {
        this.dataTable.splice(dIndex, 1);
        this.dataTable = this.dataTable.slice();
        // this.tableRef.recalculate();
      }
    }
  }

  onEditEvent(row: T, rowIndex : number) {
    this.editItems = [...this.editItems, row];
    this.editItemsData = [...this.editItemsData, Object.assign({}, row)];
  }

  onNewRowEvent() {
    const rowData: T = {} as T;
    this.editItems = [...this.editItems, rowData];
    this.editItemsData = [...this.editItemsData, Object.assign({}, rowData)];
    this.dataTable.unshift(rowData);
    this.dataTable = [...this.dataTable];
    setTimeout(() => {
      this.matExpansionPanelElement.first.open();
    }, 300);
  }

  onRowEditChange(event, row : T, key, rowIndex : number) {
    const index = this.editItems.indexOf(row);
    this.editItemsData[index][key] = event;
  }

  dropTable(event: CdkDragDrop<MatTableDataSource<any>, any>) {
    this.dragDisabled = true;

    if (this.paging) {
      let cutOut = this.dataTable.splice(
        this.paginator.pageIndex * this.paginator.pageSize +
          event.previousIndex,
        1
      )[0]; // cut the element at index 'from'
      this.dataTable.splice(
        this.paginator.pageIndex * this.paginator.pageSize + event.currentIndex,
        0,
        cutOut
      );
    } else {
      let cutOut = this.dataTable.splice(event.previousIndex, 1)[0]; // cut the element at index 'from'
      this.dataTable.splice(event.currentIndex, 0, cutOut);
    }
    this.dataTable = this.dataTable.slice();
    // moveItemInArray(this.dataTable.data, event.previousIndex, event.currentIndex);
    this.tableRef.recalculate();
  }

  onResize(event) {
    const size = event.newRect.width;
    this.viewSize = Math.floor(size / 130);
    if (size <= 600 && !this.noMobile) {
      this.isDesktop = false;
    } else {
      this.isDesktop = true;
    }
    this.onResizeExpand();
  }
  onResizeExpand() {
    this.expandHeight = this.expandRef?.nativeElement.offsetHeight;
    this.dataTable = [...this.dataTable];
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

  onPageChanged(event: PageEvent) {
    this.page = { ...this.page, ...event };
  }

  // for coloring row when expand is open
  // remember to check scss file for expanded-open class selector
  //  findExpanded(row: any) {
  //   if (this.expanded.length == 0) return false;
  //   const find = this.expanded.find(obj => row.id === obj.id);
  //   return find ? true : false
  // }

  getRowClass = (row: any) => {
    return {
      'expand-class': this.expand,
      // for coloring row when expand is open
      // 'expanded-open': this.findExpanded(row)
    };
  };
}
