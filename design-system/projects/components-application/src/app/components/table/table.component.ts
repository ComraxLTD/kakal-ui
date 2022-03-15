import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import {
  TableDataSource,
  FormService,
  RowState,
  Question,
  QuestionGroupModel,
  OptionMap,
  QuestionSelectModel,
  TableState,
  KKLSelectOption,
  FetchState,
  HeaderState,
  ColumnActions,
  FilterType,
  HeaderCellModel,
  TableActions,
  FormChangeEvent,
  PageState,
  FormActions,
  TableService,
} from '../../../../../kakal-ui/src/public-api';
import { DEMO_DATA, DEMO_OPTIONS, OptionObject, RootObject } from './mock_data';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  firstValueFrom,
  map,
  merge,
  Observable,
  of,
  switchMap,
  take,
} from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableDataSource, TableService],
})
export class TableComponent implements OnInit {
  @Input()
  totalItems: number; // demo data from server
  private demoStore$: BehaviorSubject<RootObject[]>;

  public itemKey: string = 'id';

  public columns: HeaderCellModel<RootObject>[] = [
    {
      columnDef: 'first_name',
      label: 'first_name',
    },
    {
      columnDef: 'last_name',
      label: 'last_name',
    },
    { columnDef: 'phone', label: 'phone' },
    { columnDef: 'email', label: 'email' },
    { columnDef: 'gender', label: 'gender' },
    { columnDef: 'city', label: 'city' },
    {
      columnDef: 'date',
      label: 'date',
      format: 'date',
    },
    {
      columnDef: 'currency',
      label: 'currency',
      flex: 0.5,
    },
  ];

  private questions: Question[] = [
    { key: 'first_name', validations: [Validators.required] },
    { key: 'last_name' },
    { key: 'email', controlType: 'email' },
    { key: 'phone', controlType: 'phone' },
    { key: 'gender', controlType: 'checkbox' },
    { key: 'city', controlType: 'select' },
    { key: 'date', controlType: 'date', validations: [Validators.required] },
  ];

  public data$: Observable<RootObject[]>;
  public columns$: Observable<HeaderCellModel<RootObject>[]>;
  public tableState$: Observable<TableState>;
  public initTableState$: Observable<TableState>;
  public fetchState$: Observable<FetchState>;

  public group: QuestionGroupModel;
  public optionsMap: OptionMap;

  public pagination: PageState = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 50,
  };

  constructor(
    public tableDataSource: TableDataSource<RootObject>,
    private tableService: TableService,
    private formService: FormService
  ) {}

  async ngOnInit(): Promise<void> {
    this.demoStore$ = new BehaviorSubject<RootObject[]>([]);
    // call first!
    this.initTableState$ = this.initTableState();
    this.data$ = this.setData();
    this.columns$ = this.setColumns$();
    this.optionsMap = await firstValueFrom(this.demoServerOptions());

    // form demo only
    this.tableState$ = this.tableDataSource.listenTableState();
    this.fetchState$ = this.tableDataSource.listenFetchState();
  }

  private initTableState() {
    return of(this.pagination).pipe(
      map((pagState: PageState) => {
        const oldState = this.tableDataSource.getTableState();
        const tableState: TableState = {
          ...oldState,
          pagination: {
            ...oldState.pagination,
            ...pagState,
            totalItems: this.totalItems || pagState.totalItems,
          },
          action: TableActions.INIT_STATE,
        };

        return tableState;
      })
    );
  }

  private listenToFetchState() {
    return this.tableDataSource.listenFetchState().pipe(
      switchMap((fetchState: FetchState) => {
        return of(DEMO_DATA);
      })
    );
  }

  private demoServerData(): Observable<RootObject[]> {
    const initData$ = of(DEMO_DATA);
    const fetchData$ = this.listenToFetchState();

    return merge(initData$, fetchData$).pipe(
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
            id: option.id,
            value: { code: option.id, name: option.city },
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
        return this.tableDataSource.listen();
      })
    );
  }

  private setColumns$() {
    this.tableDataSource.loadColumns(this.columns);
    return this.tableDataSource.listenColumns();
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
        const options = [
          ...optionsMap[question.key.toString()],
        ] as KKLSelectOption[];
        const value: KKLSelectOption = options.find(
          (option) => option.label === item[question.key]
        );

        question = {
          ...question,
          label: 'ערים',
          options,
          value,
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

    this.tableService.dispatch({
      rowState: { ...state, group },
      action: FormActions.EDIT,
    });
  }

  public onCancelEvent(state: RowState) {
    const { event } = state;

    this.tableService.dispatch({
      rowState: { ...state },
      action: FormActions.CANCEL,
    });

    if (event == FormActions.CREATE) {
      const data = this.demoStore$.getValue();
      data.splice(0, 1);
      this.demoStore$.next(data);
    }
  }

  public onSubmitEvent(state: RowState) {
    const { item, group } = state;

    const formItem: RootObject = { ...group.getValue() };

    const updateItem = {
      ...item,
      ...formItem,
      city: formItem.city,
    } as RootObject;
    // imitate http response
    of(updateItem)
      .pipe(
        switchMap((res: RootObject) => {
          return this.demoStore$.pipe(
            take(1),

            map((data) => {
              const city = group.getControl('city').value as KKLSelectOption;

              const indexToUpdate = data.findIndex(
                (cell: RootObject) =>
                  cell[this.itemKey].toString() === res[this.itemKey].toString()
              );
              const updateData = [...data];
              updateData[indexToUpdate] = {
                ...data[indexToUpdate],
                ...res,
                city: city?.label,
              };
              return updateData;
            })
          );
        })
      )
      .subscribe((updateData) => {
        this.demoStore$.next(updateData);

        this.tableService.dispatch({
          rowState: { ...state },
          action: FormActions.CANCEL,
        });
      });
  }

  public onCreateEvent(state: RowState) {
    const item: RootObject = {
      id: 0,
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

        this.tableService.dispatch({
          rowState: { ...state, item, group },
          action: FormActions.CREATE,
        });
      });
  }

  public onFetchOptions(columnDef: string) {
    const headerState: HeaderState = {
      key: columnDef,
      action: ColumnActions.INIT_OPTIONS,
      options: this.optionsMap[columnDef],
    };

    this.tableDataSource.loadHeaderState({ headerState });
  }

  public onQueryOptions(formChangeEvent: FormChangeEvent) {
    const { key, value } = formChangeEvent;

    of(value)
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
        // some filter logic - server or local - for filtered options
      )
      .subscribe(() => {
        const headerState: HeaderState = {
          key,
          action: ColumnActions.INIT_OPTIONS,
          options: [],
        };
        this.tableDataSource.loadHeaderState({ headerState });
      });
  }
}
