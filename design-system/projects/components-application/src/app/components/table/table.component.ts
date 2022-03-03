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
import { DEMO_DATA } from './mock_data';

export interface RootObject {
  _id: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public tableDataSource = new TableDataSource<RootObject>();

  // demo data from server
  private demoStore$: Observable<RootObject[]> = of(DEMO_DATA);

  private columns: TableColumnModel<RootObject>[] = [
    { columnDef: 'isActive', label: 'status' },
    { columnDef: 'balance', label: 'balance' },
    { columnDef: 'age', label: 'age' },
    { columnDef: 'email', label: 'email' },
  ];

  private questions: Question[] = [
    { key: 'isActive' },
    { key: 'balance', controlType: 'select' },
    { key: 'age', controlType: 'number' },
    { key: 'email' },
  ];

  public data$: Observable<RootObject[]>;
  public columns$: Observable<TableColumnModel<RootObject>[]>;

  constructor(private formService: FormService) {}

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

  private setQuestions(
    questions: Question[]
  ): Observable<QuestionGroupModel<RootObject>> {
    return of(
      this.formService.createQuestionGroup({
        questions,
      })
    );
  }

  public onEditEvent(state: RowsState) {
    const group$ = this.setQuestions(this.questions);

    this.tableDataSource.actions.edit({ state: { ...state, group$ } });
  }

  public onCloseEvent(state: RowsState) {
    const { event } = state;
    this.tableDataSource.actions.close({ state });
    if (event === 'edit') {
    }
  }
}
