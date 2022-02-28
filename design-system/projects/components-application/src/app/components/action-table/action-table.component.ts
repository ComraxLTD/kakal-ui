import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { TableDataSource } from '../../../../../kakal-ui/src/lib/table/models/table-datasource';
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
  public row: TableRowModel<Object> = new TableRowModel({});

  public dataSource = new TableDataSource();

  public rows$ = new BehaviorSubject<number[]>([1, 2, 3]);
  // public event$ : Observable<TableEvent>;


  public tableActionMap$: Observable<TableActionStatenMap>;

  ngOnInit(): void {
    this.tableActionMap$ = this.setRowsButtonActionsState();
    // this.event$ = this.dataSource.getEvents$()
  }

  private setRowsButtonActionsState(): Observable<TableActionStatenMap> {
    return this.rows$.asObservable().pipe(
      map((rows: number[]) => {
        return rows.reduce((acc, key) => {
          const deleteButtonState = new ActionStateModel({
            _disabled: key % 2 !== 0,
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
    checked ? this.rows$.next([2, 4, 6]) : this.rows$.next([1, 2, 3]);
  }
  public onToggleDeleteShow(event: MatSlideToggleChange) {}
}
