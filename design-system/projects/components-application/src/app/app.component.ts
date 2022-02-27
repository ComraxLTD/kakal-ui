import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { map, Observable, of } from 'rxjs';
import { QuestionGroupModel } from '../../../kakal-ui/src/lib/form/models/question-group.model';
import {
  FormService,
  Question,
} from '../../../kakal-ui/src/lib/form/services/form.service';
import { TableDataSource } from '../../../kakal-ui/src/lib/table/models/table-datasource';
import { TableRowModel } from '../../../kakal-ui/src/lib/table/models/table-row.model';
import { TableActionStatenMap } from '../../../kakal-ui/src/lib/table/models/table.state';
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

  public tableActionState$: Observable<TableActionStatenMap>;

  public dataSource = new TableDataSource();

  public rows$ = of([1, 2, 3]);

  private deleteButtonState = new ActionStateModel({
    event: 'delete',
  });

  ngOnInit(): void {
    this.tableActionState$ = this.setRowsButtonActionsState();
  }

  private setRowsButtonActionsState(): Observable<TableActionStatenMap> {
    return this.rows$.pipe(
      map((rows: number[]) => {
        return rows.reduce((acc, key) => {
          const editButtonState = new ActionStateModel({
            _show: true,
            _disabled: false,
            event: 'edit',
          });

          return {
            [key]: {
              delete: this.deleteButtonState.getState$(),
              edit: editButtonState.getState$(),
            },
            ...acc,
          } as TableActionStatenMap;
        }, {} as TableActionStatenMap);
      })
    );
  }

  public onToggleDeleteDisable(event: MatSlideToggleChange) {
    const checked = event.checked;
    console.log(checked);
    this.deleteButtonState.disable(checked);
  }
  public onToggleDeleteShow(event: MatSlideToggleChange) {}
}
