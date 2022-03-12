import {
  filter,
  map,
  mapTo,
  merge,
  Observable,
  startWith,
  Subject,
} from 'rxjs';
import { FormActions } from './form.actions';
import { FormChangeEvent } from './form.options';

export class FormDataSource {
  // subject which handle form logic
  private formStateSubject: Subject<FormChangeEvent>;
  private formState$: Observable<FormChangeEvent>;

  constructor() {
    this.formStateSubject = new Subject<FormChangeEvent>();
    this.formState$ = this.formStateSubject.asObservable();
  }

  public getFormState$(
    FormChangeEvent: FormChangeEvent = { event: FormActions.DEFAULT }
  ): Observable<FormChangeEvent> {
    return this.formState$.pipe(startWith(FormChangeEvent));
  }

  // method  which return form state filtered by events[]
  public getStateByAction(events?: FormActions[]): Observable<FormChangeEvent> {
    return this.getFormState$().pipe(
      filter((FormChangeEvent) => {
        return events ? events.indexOf(FormChangeEvent.event) !== -1 : true;
      })
    );
  }
  // method  which return only form events
  public getEvents(events?: FormActions[]): Observable<FormActions> {
    return this.getFormState$().pipe(
      map((FormChangeEvent: FormChangeEvent) => FormChangeEvent.event),
      filter((event) => (events ? events.indexOf(event) !== -1 : true))
    );
  }

  // FORM EVENTS SECTION

  // use when delete item form array
  private autocomplete(FormChangeEvent?: FormChangeEvent) {
    this.formStateSubject.next({
      ...FormChangeEvent,
      event: FormActions.VALUE_CHANGED,
    });
  }

  //  use when update form - formGroup.pathValue/setValue
  private edit(FormChangeEvent?: FormChangeEvent) {
    this.formStateSubject.next({ ...FormChangeEvent, event: FormActions.EDIT });
  }

  //  use when reset form - formGroup.reset()
  private clear(FormChangeEvent?: FormChangeEvent) {
    this.formStateSubject.next({ ...FormChangeEvent, event: FormActions.CLEAR });
  }
  //  use when reset form disable - formGroup.disabled()
  private disable() {
    this.formStateSubject.next({ event: FormActions.DISABLED });
  }

  //  use when update form options
  private updateOptions(FormChangeEvent?: FormChangeEvent) {
    // this.formStateSubject.next({ ...FormChangeEvent, event: 'updateOptions' });
  }

  // DATA EVENTS SECTION

  // use when delete item form array
  private delete(FormChangeEvent?: FormChangeEvent) {
    this.formStateSubject.next({ ...FormChangeEvent, event: FormActions.DELETE });
  }

  // use to create new item
  private create(FormChangeEvent?: FormChangeEvent) {
    this.formStateSubject.next({ ...FormChangeEvent, event: FormActions.CREATE });
  }

  // use when to add created item
  private add(FormChangeEvent?: FormChangeEvent) {
    this.formStateSubject.next({ ...FormChangeEvent, event: FormActions.ADD });
  }

  // use when save item form array
  private submit(FormChangeEvent?: FormChangeEvent) {
    this.formStateSubject.next({ ...FormChangeEvent, event: FormActions.SUBMIT });
  }

  // use when save item form array
  private update(FormChangeEvent?: FormChangeEvent) {
    this.formStateSubject.next({ ...FormChangeEvent, event: FormActions.UPDATE });
  }

  private createAction<T>(
    prop: { FormChangeEvent: FormChangeEvent },
    event?: FormActions
  ) {
    const { FormChangeEvent } = prop;
    this.formStateSubject.next({ ...FormChangeEvent, event });
  }

  public dispatch = {
    queryChanged: (FormChangeEvent?: FormChangeEvent) =>
      this.createAction({ FormChangeEvent }, FormActions.QUERY_CHANGED),
    valueChanged: (FormChangeEvent?: FormChangeEvent) =>
      this.createAction({ FormChangeEvent }, FormActions.VALUE_CHANGED),
    optionSelected: (FormChangeEvent?: FormChangeEvent) =>
      this.createAction({ FormChangeEvent }, FormActions.OPTION_SELECTED),
  };

  public events = {
    edit: (FormChangeEvent?: FormChangeEvent) => this.edit(FormChangeEvent),
    add: (FormChangeEvent?: FormChangeEvent) => this.add(FormChangeEvent),
    create: (FormChangeEvent?: FormChangeEvent) => this.create(FormChangeEvent),
    clear: (FormChangeEvent?: FormChangeEvent) => this.clear(FormChangeEvent),
    disable: () => this.disable(),
    updateOptions: (FormChangeEvent?: FormChangeEvent) => this.updateOptions(FormChangeEvent),
    delete: (FormChangeEvent?: FormChangeEvent) => this.delete(FormChangeEvent),
    submit: (FormChangeEvent?: FormChangeEvent) => this.submit(FormChangeEvent),
    update: (FormChangeEvent?: FormChangeEvent) => this.update(FormChangeEvent),
  };

  public on(event: FormActions): Observable<FormChangeEvent> {
    return this.getStateByAction([event]);
  }

  // public listen = {
  //   edit: () => this.getStateByAction([FormActions.EDIT]),
  //   add: () => this.getStateByAction([FormActions.ADD]),
  //   create: () => this.getStateByAction([FormActions.CREATE]),
  //   clear: () => this.getStateByAction([FormActions.CLEAR]),
  //   disable: () => this.getStateByAction([FormActions.DELETE]),
  //   updateOptions: () => this.getStateByAction([FormActions.EDIT]),
  //   delete: () => this.getStateByAction([FormActions.DELETE]),
  //   submit: () => this.getStateByAction([FormActions.SUBMIT]),
  //   update: () => this.getStateByAction([FormActions.UPDATE]),
  //   autocomplete: () => this.getStateByAction([FormActions.VALUE_CHANGED]),
  //   optionSelected: () =>
  //     this.getStateByAction([FormActions.OPTION_SELECTED]),
  // };

  public toggleEvent(
    trueEvents: FormActions[],
    falseEvents: FormActions[]
  ): Observable<boolean> {
    const true$ = this.getEvents(trueEvents).pipe(mapTo(true));
    const false$ = this.getEvents(falseEvents).pipe(mapTo(false));
    return merge(true$, false$);
  }
}
