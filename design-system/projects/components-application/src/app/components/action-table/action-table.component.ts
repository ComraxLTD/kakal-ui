import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import {
  BehaviorSubject,
  Observable,
  map,
  of,
  filter,
  switchMapTo,
  merge,
  take,
  switchMap,
  Subject,
  mapTo,
  tap,
  combineLatestAll,
  combineLatest,
  startWith,
  iif,
} from 'rxjs';
import { TableDataSource } from '../../../../../kakal-ui/src/lib/table/models/table-datasource';
import { TableEvent } from '../../../../../kakal-ui/src/lib/table/models/table-event';
import { TableRowModel } from '../../../../../kakal-ui/src/lib/table/models/table-row.model';
import {
  RowsState,
  TableState,
} from '../../../../../kakal-ui/src/lib/table/models/table.state';
import { ActionState } from '../../../../../kakal-ui/src/lib/table/table-actions/table-actions.model';
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

  // public actionStateCallback = {
  //   return (row: TableRowModel)    delete:  => {
  //     return {
  //       ...row.actionState.delete,
  //       disabled: row.item % 2 !== 0,
  //     } as ActionState;
  //   },
  // };

  public actionStateCallback(row: TableRowModel) {
    return {
      delete: {
        ...row.actionState.delete,
        disabled: row.item.id % 2 !== 0,
      } as ActionState,
    };
  }

  ngOnInit(): void {
    this.checkedSubject = new Subject<boolean>();

    // this.rows$ = this.setRowsState();
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

  private initRows(data) {
    const rows = data.map((item) => new TableRowModel({ item }));
    this.dataSource.loadRows(rows);
    return this.dataSource.connectRows();
  }

  private setRowState(data) {
    return this.dataSource.connectRows().pipe(
      map((rows) => {
        return rows.map((row: TableRowModel, index: number) => {
          return {
            ...row,
            item: { ...data[index] },
          };
        });
      })
    );
  }

  private setRowsFromData() {
    return this.setData().pipe(
      switchMap((data) => {
        return this.dataSource.initRows().pipe(
          take(1),
          switchMap((init) =>
            iif(() => init, this.initRows(data), this.setRowState(data))
          )
        );
      })
    );
  }

  private setRowsState() {
    return combineLatest([
      this.setData(),
      this.dataSource.connectTableState(),
    ]).pipe(
      map(([data, tableState]) => {
        const { editing } = tableState;

        // rows = this.setRowsWithAction(rows, this.actionStateCallback);

        if (editing.length) {
          console.log(editing);
        }

        return data;
      })
    );
  }

  private setRowsWithAction(rows, callback?): TableRowModel[] {
    return rows.map((row: TableRowModel) => {
      return {
        ...row,
        actionState: {
          ...row.actionState,
          ...callback(row),
        },
      } as TableRowModel;
    });
  }

  private onCheckedTrue(data) {
    const updateData = [...data];
    updateData[0] = { ...updateData[0], id: 2 };
    return updateData;
  }

  private onCheckedFalse(data: any[]) {
    const updateData = [...data];
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

  private handleEditEvent(
    rows: TableRowModel[],
    row: TableRowModel,
    key: string
  ): TableRowModel<any>[] {
    const updateRows = [...rows].map((tableRow) => {
      if (tableRow.item[key] === row.item[key]) {
        const form = this.formService.createQuestionGroup({
          questions: [],
        });
        tableRow = {
          ...tableRow,
          editable: true,
          form,
          actionState: {
            ...tableRow.actionState,
            edit: {
              ...tableRow.actionState.edit,
              show: false,
            } as ActionState,
            delete: {
              ...tableRow.actionState.delete,
              show: false,
            } as ActionState,
          },
        };
      } else {
        tableRow = {
          ...tableRow,
          editable: false,
          actionState: {
            ...tableRow.actionState,
            edit: {
              ...tableRow.actionState.edit,
              disabled: true,
            } as ActionState,
          },
        };
      }

      return new TableRowModel({
        ...tableRow,
      });
    });

    return updateRows;
  }

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
      console.log('work');
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
}
