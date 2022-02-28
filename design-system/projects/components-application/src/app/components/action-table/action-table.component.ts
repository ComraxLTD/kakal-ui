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
} from 'rxjs';
import { TableDataSource } from '../../../../../kakal-ui/src/lib/table/models/table-datasource';
import { TableEvent } from '../../../../../kakal-ui/src/lib/table/models/table-event';
import { TableRowModel } from '../../../../../kakal-ui/src/lib/table/models/table-row.model';
import { RowsState } from '../../../../../kakal-ui/src/lib/table/models/table.state';
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

  private rows: TableRowModel<any>[] = [
    new TableRowModel({ item: { id: 1, status: 'active' } }),
    new TableRowModel({ item: { id: 2, status: 'disable' } }),
    new TableRowModel({ item: { id: 3, status: 'active' } }),
  ];

  public rowsSubject$ = new BehaviorSubject<TableRowModel<any>[]>(this.rows);
  public event$: Observable<TableEvent>;
  public rows$: Observable<TableRowModel<any>[]>;

  private checkedSubject: Subject<boolean>;

  constructor(private formService: FormService) {}

  public actionStateCallback = {
    disabled: (item) => item.id % 2 != 0,
  };

  ngOnInit(): void {
    this.checkedSubject = new Subject<boolean>();

    this.rows$ = this.onRowsChange();
  }

  private setData() {
    const storeData$ = this.demoStore$;
    const changedData$ = this.setRowsOnToggleDelete();

    return merge(storeData$, changedData$).pipe(
      switchMap((data) => {
        console.log(data);
        this.dataSource.load(data);
        return this.dataSource.connect();
      })
    );
  }

  private setRowsFromData() {
    return this.setData().pipe(
      map((data) => {
        return data.map((item) => new TableRowModel({ item }));
      })
    );
  }

  private onRowsChange() {
    const rows$ = this.setRowsFromData();
    const rowWithAction$ = this.setRowsWithAction(
      rows$,
      this.actionStateCallback
    );
    const rowsWithEvent$ = this.setRowsOnEdit(rowWithAction$).pipe(startWith(null));

    return rowWithAction$
  }

  private setRowsWithAction(rows$, callback?): Observable<TableRowModel[]> {
    return rows$.pipe(
      map((rows: TableRowModel[]) => {
        return rows.map((row: TableRowModel) => {
          console.log('action');
          return {
            ...row,
            actionState: {
              ...row.actionState,
              delete: {
                ...row.actionState.delete,
                disabled: callback?.disabled(row.item),
              } as ActionState,
            },
          } as TableRowModel;
        });
      })
    );
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

  private setRowsOnEdit(rows$: Observable<TableRowModel[]>) {
    return this.dataSource.listen$.edit().pipe(
      switchMap((state: RowsState) => {
        console.log('edit');


        const { row } = state;
        return this.handleEditEvent(rows$, row, 'id');
      })
    );
  }

  private handleEditEvent(
    rows$: Observable<TableRowModel[]>,
    row: TableRowModel,
    key: string
  ) {
    return rows$.pipe(
      take(1),
      map((rows) => {
        console.log(rows)

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
      })
    );
  }

  public onEditEvent(state: RowsState) {
    this.dataSource.actions.edit(state);
  }
}
