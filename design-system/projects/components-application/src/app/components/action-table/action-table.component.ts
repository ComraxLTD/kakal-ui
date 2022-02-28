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
} from 'rxjs';
import { TableDataSource } from '../../../../../kakal-ui/src/lib/table/models/table-datasource';
import { TableEvent } from '../../../../../kakal-ui/src/lib/table/models/table-event';
import { TableRowModel } from '../../../../../kakal-ui/src/lib/table/models/table-row.model';
import { TableActionStatenMap } from '../../../../../kakal-ui/src/lib/table/models/table.state';
import { ActionStateModel } from '../../../../../kakal-ui/src/lib/table/table-actions/table-actions.model';
import { ButtonActionState } from '../../../../../kakal-ui/src/public-api';

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

  public rows$ = new BehaviorSubject<TableRowModel<any>[]>(this.rows);
  public event$: Observable<TableEvent>;

  public tableActionMap$: Observable<TableActionStatenMap>;

  ngOnInit(): void {
    this.tableActionMap$ = this.setRowsButtonActionsState();
    this.event$ = this.dataSource.getEvents$();
  }

  private setRowsButtonActionsState(): Observable<TableActionStatenMap> {
    return this.rows$.asObservable().pipe(
      map((rows: TableRowModel<any>[]) => {
        return rows.reduce((acc, row) => {
          const key = row.item.id;

          const deleteButtonState = new ActionStateModel({
            _disabled: row.item.id % 2 !== 0,
            event: 'delete',
          });

          const editButtonState = new ActionStateModel({
            _show: true,
            _disabled: false,
            event: 'edit',
          });

          return {
            [key]: {
              delete$: deleteButtonState.getState$(),
              edit$: editButtonState.getState$(),
            } as ButtonActionState,
            ...acc,
          } as TableActionStatenMap;
        }, {} as TableActionStatenMap);
      })
    );
  }

  public onToggleDeleteDisable(event: MatSlideToggleChange) {
    const checked = event.checked;

    console.log(checked);
    const even$ = of(checked).pipe(
      filter((isCheck) => isCheck),
      switchMapTo(
        this.rows$.asObservable().pipe(
          take(1),
          map((rows) => {
            const evenRows = [...rows];
            evenRows[0] = new TableRowModel({
              ...evenRows[0],
              item: { ...evenRows[0].item, id: 2 },
            });
            evenRows[2] = new TableRowModel({
              ...evenRows[0],
              item: { ...evenRows[2].item, id: 6 },
            });
            return evenRows;
          })
        )
      )
    );
    const notEven$ = of(checked).pipe(
      filter((isCheck) => !isCheck),
      switchMapTo(
        this.rows$.asObservable().pipe(
          take(1),
          map((rows) => {
            const notEvenRows = [...rows];
            notEvenRows[0] = new TableRowModel({
              ...notEvenRows[0],
              item: { ...notEvenRows[0].item, id: 1 },
            });
            notEvenRows[2] = new TableRowModel({
              ...notEvenRows[0],
              item: { ...notEvenRows[2].item, id: 3 },
            });
            return notEvenRows;
          })
        )
      )
    );

    merge(even$, notEven$).subscribe((rows) => {
      this.rows$.next(rows);
    });
  }
  public onToggleDeleteShow(event: MatSlideToggleChange) {}
}
