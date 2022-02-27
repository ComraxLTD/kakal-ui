import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { QuestionGroupModel } from '../../../kakal-ui/src/lib/form/models/question-group.model';
import {
  FormService,
  Question,
} from '../../../kakal-ui/src/lib/form/services/form.service';
import { TableDataSource } from '../../../kakal-ui/src/lib/table/models/table-datasource';
import { TableRowModel } from '../../../kakal-ui/src/lib/table/models/table-row.model';
import { TableActionStatenMap } from '../../../kakal-ui/src/lib/table/models/table.state';
import { ButtonActionState } from '../../../kakal-ui/src/lib/table/table-actions/table-actions.component';
import { ActionStateModel } from '../../../kakal-ui/src/lib/table/table-actions/table-actions.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'components-application';
  constructor(private formService: FormService) {}

  public row: TableRowModel<Object> = new TableRowModel({});

  questions: Question[] = [
    {
      key: 'timeInput',
      label: 'time',
      controlType: 'time',
    },
    {
      key: 'name',
    },
    {
      key: 'email',
      controlType: 'email',
    },
    {
      key: 'phone',
      controlType: 'phone',
    },
    {
      key: 'date',
      type: 'date',
    },
    {
      key: 'text',
      controlType: 'textarea',
    },
    {
      key: 'file',
      type: 'file',
      controlType: 'file',
    },
    {
      key: 'cities',
      type: 'select',
      controlType: 'select',
      options: [{ label: 'test', value: 0 }],
    },
  ];
  public formGroup: QuestionGroupModel;

  public tableActionMap$: Observable<TableActionStatenMap>;

  public dataSource = new TableDataSource();

  public rows$ = new BehaviorSubject<number[]>([1, 2, 3]);

  private deleteButtonState = new ActionStateModel({
    event: 'delete',
  });

  ngOnInit(): void {
    this.tableActionMap$ = this.setRowsButtonActionsState();
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
