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

    this.rows$ = merge(
      this.setRows(this.actionStateCallback),
      this.setRowsOnEdit()
    );

    this.setRowsOnToggleDelete()
  }

  private setRows(callback?) {
    return this.rowsSubject$.asObservable().pipe(

      map((rows: TableRowModel[]) => {
        return rows.map((row: TableRowModel) => {
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

  private onCheckedTrue() {
    return this.rowsSubject$.asObservable().pipe(
      take(1),
      map((rows) => {
        const evenRows = [...rows];
        evenRows[0] = new TableRowModel({
          ...evenRows[0],
          item: { ...evenRows[0].item, id: 2 },
        });
        return evenRows;
      })
    );
  }

  private onCheckedFalse() {
    return this.rowsSubject$.asObservable().pipe(
      take(1),
      map((rows) => {
        const notEvenRows = [...rows];
        notEvenRows[0] = new TableRowModel({
          ...notEvenRows[0],
          item: { ...notEvenRows[0].item, id: 1 },
        });

        return notEvenRows;
      })
    );
  }

  private setRowsOnToggleDelete() {
    const checked$ = this.checkedSubject.asObservable();
    const true$ = checked$.pipe(
      filter((checked) => checked),
      switchMapTo(this.onCheckedTrue())
    );
    const false$ = checked$.pipe(
      filter((checked) => !checked),
      switchMapTo(this.onCheckedFalse())
    );

    merge(true$, false$).subscribe((rows) => this.rowsSubject$.next(rows));
  }

  public onToggleDeleteDisable(event: MatSlideToggleChange) {
    const checked = event.checked;
    this.checkedSubject.next(checked);

    // const even$ = of(checked).pipe(
    //   filter((isCheck) => isCheck),
    //   switchMapTo(
    //     this.rowsSubject$.asObservable().pipe(
    //       take(1),
    //       map((rows) => {
    //         const evenRows = [...rows];
    //         evenRows[0] = new TableRowModel({
    //           ...evenRows[0],
    //           item: { ...evenRows[0].item, id: 2 },
    //         });
    //         return evenRows;
    //       })
    //     )
    //   )
    // );
    // const notEven$ = of(checked).pipe(
    //   filter((isCheck) => !isCheck),
    //   switchMapTo(
    //     this.rowsSubject$.asObservable().pipe(
    //       take(1),
    //       map((rows) => {
    //         const notEvenRows = [...rows];
    //         notEvenRows[0] = new TableRowModel({
    //           ...notEvenRows[0],
    //           item: { ...notEvenRows[0].item, id: 1 },
    //         });

    //         return notEvenRows;
    //       })
    //     )
    //   )
    // );

    // merge(even$, notEven$).subscribe((rows) => {
    //   this.rowsSubject$.next(rows);
    // });
  }
  public onToggleDeleteShow(event: MatSlideToggleChange) {}

  private setRowsOnEdit() {
    return this.dataSource.listen$.edit().pipe(
      switchMap((state: RowsState) => {
        const { row } = state;
        return this.handleEditEvent(row, 'id');
      })
    );
  }

  private handleEditEvent(row: TableRowModel, key: string) {
    return this.rowsSubject$.asObservable().pipe(
      take(1),
      map((rows) => {
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
