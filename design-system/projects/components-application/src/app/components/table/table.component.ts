import { Component, OnInit } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import {
  TableDataSource,
  FormService,
  TableColumnModel,
  RowsState,
  Question,
  QuestionGroupModel,
} from '../../../../../kakal-ui/src/public-api';
import { DEMO_DATA, RootObject } from './mock_data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableDataSource],
})
export class TableComponent implements OnInit {
  // demo data from server
  private demoStore$: Observable<RootObject[]> = of(DEMO_DATA);

  private columns: TableColumnModel<RootObject>[] = [
    { columnDef: 'first_name', label: 'first_name', editable: true },
    { columnDef: 'last_name', label: 'last_name', editable: true },
    { columnDef: 'email', label: 'email', editable: true },
    { columnDef: 'gender', label: 'gender', editable: true },
    { columnDef: 'city', label: 'city', editable: true },
    { columnDef: 'date', label: 'date', editable: true },
    { columnDef: 'currency', label: 'currency' },
  ];

  private questions: Question[] = [
    { key: 'first_name' },
    { key: 'last_name' },
    { key: 'email', controlType: 'email' },
    { key: 'gender', controlType: 'checkbox' },
    { key: 'city', controlType: 'select' },
    { key: 'date', controlType: 'date' },
  ];

  public data$: Observable<RootObject[]>;
  public columns$: Observable<TableColumnModel<RootObject>[]>;

  constructor(
    private formService: FormService,
    private tableDataSource: TableDataSource<RootObject>
  ) {}

  ngOnInit(): void {
    this.data$ = this.setData();
    this.columns$ = this.setColumns$();
  }

  private setData() {
    const storeData$ = this.demoStore$;

    return storeData$.pipe(
      switchMap((data) => {
        this.tableDataSource.load(data);
        return this.tableDataSource.connect();
      })
    );
  }

  private setColumns$() {
    return this.tableDataSource.connectColumns(this.columns);
  }

  private setQuestions(questions: Question[], item: RootObject): Question[] {
    return questions.map((question) => {
      return {
        ...question,
        value: item[question.key],
      };
    });
  }

  private setGroup(questions: Question[]) {
    return this.formService.createQuestionGroup({
      questions,
    });
  }

  public onEditEvent(state: RowsState) {
    const { item } = state;
    const group = this.setGroup(this.setQuestions(this.questions, item));
    this.tableDataSource.actions.edit({ state: { ...state, group } });
  }

  public onCloseEvent(state: RowsState) {
    const { event } = state;
    this.tableDataSource.actions.close({ state });
    if (event === 'edit') {
    }
  }

  public onSaveEvent(state: RowsState) {
    console.log(state.item);
  }
}
