import { Component, OnInit } from '@angular/core';
import {
  TableDataSource,
  FormService,
  TableColumnModel,
  RowState,
  Question,
  QuestionGroupModel,
  OptionMap,
  QuestionSelectModel,
  TableState,
} from '../../../../../kakal-ui/src/public-api';
import { DEMO_DATA, DEMO_OPTIONS, OptionObject, RootObject } from './mock_data';
import {
  BehaviorSubject,
  firstValueFrom,
  map,
  Observable,
  of,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { Validators } from '@angular/forms';
import { TableService } from '../../../../../kakal-ui/src/lib/table/components/table/table.service';
import { PaginationInstance } from 'ngx-pagination';
import { FormActions } from '../../../../../kakal-ui/src/lib/form/models/form.actions';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableDataSource, TableService],
})
export class TableComponent implements OnInit {
  // demo data from server
  private demoStore$: BehaviorSubject<RootObject[]>;

  public itemKey: string = 'id';

  private columns: TableColumnModel<RootObject>[] = [
    { columnDef: 'first_name', label: 'first_name' },
    { columnDef: 'last_name', label: 'last_name' },
    { columnDef: 'email', label: 'email' },
    { columnDef: 'gender', label: 'gender' },
    { columnDef: 'city', label: 'city' },
    { columnDef: 'date', label: 'date', format: 'date' },
    { columnDef: 'currency', label: 'currency', flex: 0.5 },
  ];

  private questions: Question[] = [
    { key: 'first_name', validations: [Validators.required] },
    { key: 'last_name' },
    { key: 'email', controlType: 'email' },
    { key: 'gender', controlType: 'checkbox' },
    { key: 'city', controlType: 'select' },
    { key: 'date', controlType: 'date', validations: [Validators.required] },
  ];

  public data$: Observable<RootObject[]>;
  public columns$: Observable<TableColumnModel<RootObject>[]>;
  public tableState$: Observable<TableState>;

  public group: QuestionGroupModel;
  public optionsMap: OptionMap;

  public pagination: PaginationInstance = { itemsPerPage: 3, currentPage: 1 };

  constructor(
    private formService: FormService,
    public tableDataSource: TableDataSource<RootObject>
  ) {}

  async ngOnInit(): Promise<void> {
    this.demoStore$ = new BehaviorSubject<RootObject[]>([]);
    this.data$ = this.setData();
    this.columns$ = this.setColumns$();
    this.tableState$ = this.tableDataSource.connectTableState();
    this.optionsMap = await firstValueFrom(this.demoServerOptions());
  }

  private demoServerData(): Observable<RootObject[]> {
    return of(DEMO_DATA).pipe(
      switchMap((data: RootObject[]) => {
        this.demoStore$.next(data);

        return this.demoStore$.asObservable();
      })
    );
  }
  private demoServerOptions(): Observable<OptionMap> {
    return of(DEMO_OPTIONS).pipe(
      map((options: OptionObject[]) => {
        return options.map((option: OptionObject) => {
          return {
            value: option.id,
            label: option.city,
          };
        });
      }),
      map((options) => {
        return { city: options };
      })
    );
  }

  private setData() {
    const storeData$ = this.demoServerData();

    return storeData$.pipe(
      switchMap((data) => {
        this.tableDataSource.load(data);
        return this.tableDataSource.connect();
      })
    );
  }

  private setColumns$() {
    this.tableDataSource.loadColumns(this.columns);
    return this.tableDataSource.connectColumns();
  }

  private setQuestions(
    questions: Question[],
    item: RootObject,
    optionsMap?: OptionMap
  ): Question[] {
    return questions.map((question) => {
      question = {
        ...question,
        value: item[question.key],
      } as Question;

      if (question.controlType === 'select') {
        question = {
          ...question,
          label: '',
          options: [...optionsMap[question.key.toString()]],
          value: { value: 1, label: '' },
        } as QuestionSelectModel;
      }

      return question;
    });
  }

  private setGroup(questions: Question[]) {
    return this.formService.createQuestionGroup({
      questions,
    });
  }

  public onEditEvent(state: RowState) {
    const { item } = state;
    const group = this.setGroup(
      this.setQuestions(this.questions, item, this.optionsMap)
    );

    this.tableDataSource.actions.edit({
      state: { ...state, group },
    });
  }

  public onCancelEvent(state: RowState) {
    const { event } = state;
    this.tableDataSource.actions.cancel({ state });

    if (event == FormActions.CREATE) {
      const data = this.demoStore$.getValue();
      data.splice(0, 1);
      this.demoStore$.next(data);
    }
  }

  public onSubmitEvent(state: RowState) {
    const { item } = state;

    // imitate http response
    of(item)
      .pipe(
        switchMap((item) => {
          return this.demoStore$.pipe(
            take(1),

            map((data) => {
              const indexToUpdate = data.findIndex(
                (cell: RootObject) =>
                  cell[this.itemKey].toString() ===
                  item[this.itemKey].toString()
              );
              const updateData = [...data];
              updateData[indexToUpdate] = { ...data[indexToUpdate], ...item };
              return updateData;
            })
          );
        })
      )
      .subscribe((updateData) => {
        this.demoStore$.next(updateData);
        this.tableDataSource.actions.cancel({ state });
      });
  }

  public onCreateEvent(state: RowState) {
    const item: RootObject = {
      id: 0,
      first_name: '',
      last_name: '',
      email: '',
      gender: '',
      city: '',
      date: null,
      currency: '',
    };

    of(item)
      .pipe(
        switchMap((item) => {
          return this.demoStore$.pipe(
            take(1),
            map((data) => {
              const updateData = [...data];
              updateData.unshift(item);
              return updateData;
            })
          );
        })
      )
      .subscribe((updateData) => {
        this.demoStore$.next(updateData);
        const group = this.setGroup(
          this.setQuestions(this.questions, item, this.optionsMap)
        );
        this.tableDataSource.actions.create({
          state: { ...state, item, group },
        });
      });
  }
}
