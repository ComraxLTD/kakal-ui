import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import {
  Observable,
  map,
  of,
  filter,
  switchMapTo,
  merge,
  switchMap,
  Subject,

} from 'rxjs';
import { TableDataSource } from '../../../../../kakal-ui/src/lib/table/models/table-datasource';
import { TableEvent } from '../../../../../kakal-ui/src/lib/table/models/table-event';
import { TableRowModel } from '../../../../../kakal-ui/src/lib/table/models/table-row.model';
import {
  RowsState,
  TableState,
} from '../../../../../kakal-ui/src/lib/table/models/table.state';
import {
  ActionState,
  ActionStateRules,
} from '../../../../../kakal-ui/src/lib/table/table-actions/table-actions.model';
import { FormService } from '../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-action-table',
  templateUrl: './action-table.component.html',
  styleUrls: ['./action-table.component.scss'],
})
export class ActionTableComponent implements OnInit {

  public dataSource = new TableDataSource();

  // demo data from server
  private demoStore$: Observable<any[]> = of([
    { id: 1, status: 'active' },
    { id: 2, status: 'disable' },
    { id: 3, status: 'active' },
  ]);

  public event$: Observable<TableEvent>;
  public rows$: Observable<TableRowModel<any>[]>;
  public data$: Observable<any[]>;

  private checkedSubject: Subject<boolean>;

  constructor(private formService: FormService) {}

  public actionStateCallback(row: TableRowModel) {
    return {
      delete: {
        ...row.actionState.delete,
        disabled: row.item.id % 2 !== 0,
      } as ActionState,
    };
  }

  public editDisableLogic(item, editing?: number[]) {
    return item.id % 2 !== 0;
  }
  public deleteDisableLogic(item, editing?: number[]) {
    return item.status % 2 !== 0;
  }

  public actionStateRules: ActionStateRules = {
    disableDelete: (item) => item.status === 'disable',
    showDelete: () => true,
    disableEdit: (item) => item.id % 2 !== 0,
    showEdit: () => true,
  };

  ngOnInit(): void {
    this.checkedSubject = new Subject<boolean>();
    this.data$ = this.setData();
  }

  private setData() {
    const storeData$ = this.demoStore$;
    const changedData$ = this.setRowsOnToggleDelete();

    return merge(storeData$, changedData$).pipe(
      switchMap((data) => {
        this.dataSource.load(data);
        return this.dataSource.connect();
      })
    );
  }

  private onCheckedTrue(data) {
    const updateData = [...data];
    // updateData[0] = { ...updateData[0], status: 'disable' };
    updateData[0] = { ...updateData[0], id: 4 };
    return updateData;
  }

  private onCheckedFalse(data: any[]) {
    const updateData = [...data];
    // updateData[0] = { ...updateData[0], status: 'active' };
    updateData[0] = { ...updateData[0], id: 1 };
    return updateData;
  }

  private setRowsOnToggleDelete(): Observable<any[]> {
    const storeData$ = this.demoStore$;

    const checked$ = this.checkedSubject.asObservable();
    const true$ = checked$.pipe(
      filter((checked) => checked),
      switchMapTo(storeData$.pipe(map((data) => this.onCheckedTrue(data))))
    );

    const false$ = checked$.pipe(
      filter((checked) => !checked),
      switchMapTo(storeData$.pipe(map((data) => this.onCheckedFalse(data))))
    );

    return merge(true$, false$);
  }

  public onToggleDeleteDisable(event: MatSlideToggleChange) {
    const checked = event.checked;
    this.checkedSubject.next(checked);
  }
  public onToggleDeleteShow(event: MatSlideToggleChange) {}

  private updateArray(options: {
    array: any[];
    value: any;
    itemIndex: number;
    key?;
  }) {
    const { array, value, itemIndex, key } = options;
    const index = array.indexOf(value);
    if (index !== -1) {
      array.splice(index, 1);
    } else {
      array.push(value);
    }

    return array;
  }

  public onEditEvent(state: RowsState) {
    const { item, itemIndex } = state;
    const { editing } = this.dataSource.getTableState();
    const tableState = {
      ...this.dataSource.getTableState(),
      editing: this.updateArray({
        array: [...editing],
        value: item.id,
        itemIndex,
        key: 'id',
      }),

      event: 'edit',
    } as TableState;

    this.dataSource.loadTableState(tableState);
  }
  private onEditCloseEvent(state: RowsState) {
    const { item, itemIndex } = state;
    const { editing } = this.dataSource.getTableState();
    const tableState = {
      ...this.dataSource.getTableState(),
      editing: this.updateArray({
        array: [...editing],
        value: item.id,
        itemIndex,
        key: 'id',
      }),

      event: 'close',
    } as TableState;
    this.dataSource.loadTableState(tableState);
  }

  public onCloseEvent(state: RowsState) {
    const { event } = state;

    if (event === 'edit') {
      this.onEditCloseEvent(state);
    }
  }
  public onSaveEvent(state: RowsState) {
    const { event } = state;
    if (event === 'edit') {
      this.onEditCloseEvent(state);
    }
  }
}
