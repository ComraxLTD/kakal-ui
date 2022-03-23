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
  private autocomplete(formChangeEvent?: FormChangeEvent) {
    this.formStateSubject.next({
      ...formChangeEvent,
      event: FormActions.VALUE_CHANGED,
    });
  }

  //  use when update form - formGroup.pathValue/setValue
  private edit(formChangeEvent?: FormChangeEvent) {
    this.formStateSubject.next({ ...formChangeEvent, event: FormActions.EDIT });
  }

  //  use when reset form - formGroup.reset()
  private clear(formChangeEvent?: FormChangeEvent) {
    this.formStateSubject.next({
      ...formChangeEvent,
      event: FormActions.CLEAR,
    });
  }
  //  use when reset form disable - formGroup.disabled()
  private disable() {
    this.formStateSubject.next({ event: FormActions.DISABLED });
  }

  //  use when update form options
  private updateOptions(formChangeEvent?: FormChangeEvent) {
    // this.formStateSubject.next({ ...FormChangeEvent, event: 'updateOptions' });
  }

  // DATA EVENTS SECTION

  // use when delete item form array
  private delete(formChangeEvent?: FormChangeEvent) {
    this.formStateSubject.next({
      ...formChangeEvent,
      event: FormActions.DELETE,
    });
  }

  // use to create new item
  private create(formChangeEvent?: FormChangeEvent) {
    this.formStateSubject.next({
      ...formChangeEvent,
      event: FormActions.CREATE,
    });
  }

  // use when to add created item
  private add(formChangeEvent?: FormChangeEvent) {
    this.formStateSubject.next({ ...formChangeEvent, event: FormActions.ADD });
  }

  // use when save item form array
  private submit(formChangeEvent?: FormChangeEvent) {
    this.formStateSubject.next({
      ...formChangeEvent,
      event: FormActions.SUBMIT,
    });
  }

  // use when save item form array
  private update(formChangeEvent?: FormChangeEvent) {
    this.formStateSubject.next({
      ...formChangeEvent,
      event: FormActions.UPDATE,
    });
  }

  private createAction<T>(
    prop: { formChangeEvent: FormChangeEvent },
    event?: FormActions
  ) {
    const { formChangeEvent } = prop;
    this.formStateSubject.next({ ...formChangeEvent, event });
  }

  public dispatch = {
    queryChanged: (formChangeEvent?: FormChangeEvent) =>
      this.createAction({ formChangeEvent }, FormActions.QUERY_CHANGED),
    valueChanged: (formChangeEvent?: FormChangeEvent) =>
      this.createAction({ formChangeEvent }, FormActions.VALUE_CHANGED),
    optionSelected: (formChangeEvent?: FormChangeEvent) =>
      this.createAction({ formChangeEvent }, FormActions.OPTION_SELECTED),
    selectedChanged: (formChangeEvent?: FormChangeEvent) =>
      this.createAction({ formChangeEvent }, FormActions.SELECT_CHANGED),
  };

  public events = {
    edit: (formChangeEvent?: FormChangeEvent) => this.edit(formChangeEvent),
    add: (formChangeEvent?: FormChangeEvent) => this.add(formChangeEvent),
    create: (formChangeEvent?: FormChangeEvent) => this.create(formChangeEvent),
    clear: (formChangeEvent?: FormChangeEvent) => this.clear(formChangeEvent),
    disable: () => this.disable(),
    updateOptions: (formChangeEvent?: FormChangeEvent) =>
      this.updateOptions(formChangeEvent),
    delete: (formChangeEvent?: FormChangeEvent) => this.delete(formChangeEvent),
    submit: (formChangeEvent?: FormChangeEvent) => this.submit(formChangeEvent),
    update: (formChangeEvent?: FormChangeEvent) => this.update(formChangeEvent),
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
