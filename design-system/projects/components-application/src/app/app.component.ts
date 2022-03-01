import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
      key:'textEditor',
      controlType:'textEditor',
      type:'textEditor'
    },
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
  public control:FormControl = new FormControl();
  public tableActionMap$: Observable<TableActionStatenMap>;

  public dataSource = new TableDataSource();

  public rows$ = new BehaviorSubject<number[]>([1, 2, 3]);



  ngOnInit(): void {
    this.control.setValue({start:new Date(),end:new Date()})
}
