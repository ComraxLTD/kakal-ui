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
  combineLatest,
  switchMap,
  share,
  mapTo,
  tap,
} from 'rxjs';
import { TableDataSource } from '../../../../../kakal-ui/src/lib/table/models/table-datasource';
import { TableEvent } from '../../../../../kakal-ui/src/lib/table/models/table-event';
import { TableRowModel } from '../../../../../kakal-ui/src/lib/table/models/table-row.model';
import {
  RowsState,
  TableActionStatenMap,
} from '../../../../../kakal-ui/src/lib/table/models/table.state';
import { ActionStateModel } from '../../../../../kakal-ui/src/lib/table/table-actions/table-actions.model';
import {
  ButtonActionState,
  FormService,
} from '../../../../../kakal-ui/src/public-api';

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

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.tableActionMap$ = this.getTableButtonActionsState();
  }

  private setDeleteButtonStateByEvent(row: TableRowModel, event: TableEvent) {
    console.log(event);
    switch (event) {
      case 'edit':
        return new ActionStateModel({
          _show: !row.editable,
          _disabled: !row.editable,
          event: 'edit',
        });
      default:
        return new ActionStateModel({
          _show: true,
          _disabled: false,
          event: 'edit',
        });
    }
  }
  private setEditButtonStateByEvent(row: TableRowModel, event: TableEvent) {
    console.log(event);
    switch (event) {
      case 'edit':
        return new ActionStateModel({
          _show: !row.editable,
          _disabled: true,
          event: 'edit',
        });
      default:
        return new ActionStateModel({
          _show: true,
          _disabled: false,
          event: 'edit',
        });
    }
  }

  private setTableButtonActionsState(
    rows,
    event: TableEvent
  ): TableActionStatenMap {
    return rows.reduce((acc, row) => {
      const key = row.item.id;

      const deleteButtonState = this.setDeleteButtonStateByEvent(row, event);
      const editButtonState = this.setEditButtonStateByEvent(row, event);

      return {
        [key]: {
          delete: deleteButtonState.getState(),
          edit: editButtonState.getState(),
        } as ButtonActionState,
        ...acc,
      } as TableActionStatenMap;
    }, {} as TableActionStatenMap);
  }

  private getTableButtonActionsState(): Observable<TableActionStatenMap> {
    const rows$ = this.rows$.asObservable().pipe(take(1));

    const onEdit$ = this.dataSource.listen$.edit();
    const onDefault$ = this.dataSource.listen$.default();

    const buttonDefaultState$ = rows$.pipe(
      switchMap((rows) => {
        return onDefault$.pipe(
          filter((state) => state.event === 'default'),
          map((state) => {
            console.log('default');
            return this.setTableButtonActionsState(rows, state.event);
          })
        );
      })
    );

    const buttonEditState$ = rows$.pipe(
      switchMap((rows) => {
        return onEdit$.pipe(
          filter((state) => state.event === 'edit'),
          map((state) => {
            return this.setTableButtonActionsState(rows, state.event);
          })
        );
      })
    );

    return merge(buttonDefaultState$, buttonEditState$);
  }

  public onToggleDeleteDisable(event: MatSlideToggleChange) {
    const checked = event.checked;

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

  public onEditEvent(state: RowsState) {
    const { row } = state;
    const editable = row.editable;

    of(editable)
      .pipe(
        switchMapTo(
          this.rows$.asObservable().pipe(
            take(1),
            map((rows) => {
              const updateRows = [...rows];
              const itemIndex: number = updateRows.findIndex(
                (tableRow: TableRowModel) => tableRow.item.id === row.item.id
              );

              const form = this.formService.createQuestionGroup({
                questions: [],
              });

              updateRows[itemIndex] = new TableRowModel({
                ...updateRows[itemIndex],
                editable: !row.editable,
                // form,
              });
              return { rows: updateRows, updateRow: updateRows[itemIndex] };
            })
          )
        )
      )
      .subscribe(({ rows, updateRow }) => {
        this.rows$.next(rows);
        this.dataSource.actions.edit({ row: updateRow });
      });
  }
}
