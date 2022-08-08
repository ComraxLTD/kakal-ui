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

import { BehaviorSubject, Subject } from 'rxjs';
import { MatExpansionPanel } from '@angular/material/expansion';
import { setControls } from '../../../mei-services/services/form-create';
import { KklSelectOption } from '../../../mei-form/models/kkl-select.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OptionsModel } from '../../../mei-form/models/options.model';

const normalActions = [
  'inlineEdit',
  'inlineDelete',
  'inlineExpand',
  'inlineNavigation',
];

@Component({
  selector: 'kkl-ngx-event-table',
  templateUrl: '../all-tabels/all-table.component.html',
  styleUrls: ['../all-tabels/all-table.component.scss'],
})
export class NgxEventTableComponent implements OnInit, AfterViewInit {
  ColumnMode = ColumnMode;
  @ViewChild('myTable') ngxTable: DatatableComponent;
  // control the highet of expand panal
  @ViewChild('myExpand') myExpand!: ElementRef;
  expandHeight: number = 0;

  typeLocal: boolean = false;

  // control the size of div
  @ViewChild('myIdentifier') myIdentifier: ElementRef;
  @ViewChildren(MatExpansionPanel) matExpansionPanelElement: QueryList<MatExpansionPanel>
  @Input() noMobile: boolean = false;
  destroySubject$: Subject<void> = new Subject();

  isLoading: boolean = true;

  @Output() actionClicked = new EventEmitter<RowActionEvent>();
  @Output() deleteRow = new EventEmitter<any>();
  @Output() saveRow = new EventEmitter<any>();
  @Output() expandRow = new EventEmitter<RowExpandEvent>();

  @Output() searchChange = new EventEmitter<Object>();
  @Output() pageChange = new EventEmitter<PageEvent>();

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
      });
      setControls(newVals, this.searchRow, this.fb, this.localObservables);
    }
    this.oneColumns = value;
    this.hasSummary = value.some((a) => a.sumFunc);
  }

  dataTable: any[];
  @Input() set dataSource(value: any[]) {
    if (value) {
      this.dataTable = value;
      this.isLoading = false;
    } else {
      this.dataTable = [];
    }
  }


  localObservables: Map<string, BehaviorSubject<KklSelectOption[]>> = new Map<
    string,
    BehaviorSubject<KklSelectOption[]>
  >();
  @Input() searchRow: FormGroup;
  myOptions: OptionsModel[] = [];
  @Input() set options(val: OptionsModel[]) {
    if (val) {
      this.myOptions = val;
      if (this.searchRow) {
        this.putOptions();
      }
    }
  }

  localButtons: RowActionModel[];
  @Input() set rowActions(val: RowActionModel[]) {
    this.localButtons = val;
  }

  editItems = [];
  editItemsData = [];

  isDesktop: boolean = true;
  viewSize!: number;

  @Input() page = new NgxPage();

  constructor(
    private dialogService: DialogService,
    private routerService: RouterService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    if (
      this.localButtons?.some((a) => a.type === 'inlineExpand') ||
      this.oneColumns.some((a) => a.button?.type === 'inlineExpand')
    ) {
      this.expand = true;
    }
    if (!this.searchRow) {
      this.searchRow = this.fb.group({});
    }
    setControls(
      this.oneColumns,
      this.searchRow,
      this.fb,
      this.localObservables
    );
    this.page.pageSize = 5;
    this.page.pageIndex = 0;
  }

  ngAfterViewInit() {
    this.putOptions();
    setTimeout(() => {
      const size = this.myIdentifier.nativeElement.offsetWidth;
      this.viewSize = Math.floor(size / 130);
      if (size <= 600 && !this.noMobile) {
        this.isDesktop = false;
      } else {
        this.isDesktop = true;
      }
    }, 0);
  }


  searchChanged() {
    this.searchChange.emit(this.searchRow.value);
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
    } else {
      this.actionClicked.emit({ action: butt.type, row: obj, key: key });
    }
  }

  addExpandedRow(obj: any) {
    this.ngxTable.rowDetail.toggleExpandRow(obj);
    const ind = this.expanded.indexOf(obj);
    if (ind == -1) {
      this.expanded.push(obj);
      this.expanded = [...this.expanded];
    } else {
      this.expanded.splice(ind, 1);
      this.expanded = [...this.expanded];
    }
    setTimeout(() => {
      this.onResizeExpand();
    }, 300);
  }

  saveRowClick(row: any) {
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
        // this.ngxTable.recalculate();
      }
    }
  }

  cancelRowClick(row: any) {
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
        // this.ngxTable.recalculate();
      }
    }
  }

  addRowGroup(obj: any) {
    this.editItems = [...this.editItems, obj];
    this.editItemsData = [...this.editItemsData, Object.assign({}, obj)];
  }

  addNewRowGroup() {
    const rowData: any = {} as any;
    this.editItems = [...this.editItems, rowData];
    this.editItemsData = [...this.editItemsData, Object.assign({}, rowData)];
    this.dataTable.unshift(rowData);
    this.dataTable = [...this.dataTable];
    setTimeout(() => {
      this.matExpansionPanelElement.first.open()
    }, 300);
  }

  onRowEditChange(event, row, key) {
    const index = this.editItems.indexOf(row);
    this.editItemsData[index][key] = event;
  }

  dropTable(event: CdkDragDrop<MatTableDataSource<any>, any>) {
    this.dragDisabled = true;

    let cutOut = this.dataTable.splice(event.previousIndex, 1)[0]; // cut the element at index 'from'
    this.dataTable.splice(event.currentIndex, 0, cutOut);
    this.dataTable = this.dataTable.slice();
    // moveItemInArray(this.dataTable.data, event.previousIndex, event.currentIndex);
    this.ngxTable.recalculate();
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
    this.expandHeight = this.myExpand?.nativeElement.offsetHeight;
    this.dataTable = [...this.dataTable];
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

  pageChanged(event: PageEvent) {
    this.pageChange.emit(event);
    // this.page = { ...this.page, ...event };
  }

  // for coloring row when expand is open
  // remember to check scss file for expanded-open class selector
  //  findExpanded(row: any) {
  //   if (this.expanded.length == 0) return false;
  //   const find = this.expanded.find(obj => row.id === obj.id);
  //   return find ? true : false
  // }

  putOptions() {
    this.myOptions.forEach((b) => {
      this.localObservables.get(b.key)?.next(b.val);
    });
  }

  getRowClass = (row: any) => {
    return {
      'expand-class': this.expand,
      // for coloring row when expand is open
      // 'expanded-open': this.findExpanded(row)
    };
  };
}
