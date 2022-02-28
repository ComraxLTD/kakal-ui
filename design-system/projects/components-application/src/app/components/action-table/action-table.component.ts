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
import {
  ActionState,
  ActionStateModel,
} from '../../../../../kakal-ui/src/lib/table/table-actions/table-actions.model';
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

  constructor(private formService: FormService) {}

  ngOnInit(): void {}

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
              const itemIndex: number = rows.findIndex(
                (tableRow: TableRowModel) => tableRow.item.id === row.item.id
              );

              const updateRows = [...rows].map((tableRow) => {
                if (tableRow.item.id === row.item.id) {
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

              return { rows: updateRows, updateRow: updateRows[itemIndex] };
            })
          )
        )
      )
      .subscribe(({ rows, updateRow }) => {
        this.rows$.next(rows);
      });
  }
}
