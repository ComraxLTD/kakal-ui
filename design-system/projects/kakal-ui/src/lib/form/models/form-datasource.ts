import {
  filter,
  map,
  mapTo,
  merge,
  Observable,
  startWith,
  Subject,
} from 'rxjs';
import { FormActions } from './form-events';
import { FormOption } from './form-options';

export class FormDataSource {
  // subject which handle form logic
  private formStateSubject: Subject<FormOption>;
  private formState$: Observable<FormOption>;

  constructor() {
    this.formStateSubject = new Subject<FormOption>();
    this.formState$ = this.formStateSubject.asObservable();
  }

  public getFormState$(
    formOption: FormOption = { event: FormActions.DEFAULT }
  ): Observable<FormOption> {
    return this.formState$.pipe(startWith(formOption));
  }

  // method  which return form state filtered by events[]
  public getStateByAction(events?: FormActions[]): Observable<FormOption> {
    return this.getFormState$().pipe(
      filter((formOption) => {
        return events ? events.indexOf(formOption.event) !== -1 : true;
      })
    );
  }
  // method  which return only form events
  public getEvents(events?: FormActions[]): Observable<FormActions> {
    return this.getFormState$().pipe(
      map((formOption: FormOption) => formOption.event),
      filter((event) => (events ? events.indexOf(event) !== -1 : true))
    );
  }

  // FORM EVENTS SECTION

  // use when delete item form array
  private autocomplete(formOption?: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormActions.CHANGE });
  }

  //  use when update form - formGroup.pathValue/setValue
  private edit(formOption?: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormActions.EDIT });
  }

  //  use when reset form - formGroup.reset()
  private clear(formOption?: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormActions.CLEAR });
  }
  //  use when reset form disable - formGroup.disabled()
  private disable() {
    this.formStateSubject.next({ event: FormActions.DISABLED });
  }

  //  use when update form options
  private updateOptions(formOption?: FormOption) {
    // this.formStateSubject.next({ ...formOption, event: 'updateOptions' });
  }

  // DATA EVENTS SECTION

  // use when delete item form array
  private delete(formOption?: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormActions.DELETE });
  }

  // use to create new item
  private create(formOption?: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormActions.CREATE });
  }

  // use when to add created item
  private add(formOption?: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormActions.ADD });
  }

  // use when save item form array
  private submit(formOption?: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormActions.SUBMIT });
  }

  // use when save item form array
  private update(formOption?: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormActions.UPDATE });
  }

  private optionSelected(formOption: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormActions.SELECTED });
  }

  private createAction<T>(
    prop: { formOption: FormOption },
    event?: FormActions
  ) {
    const { formOption } = prop;
    this.formStateSubject.next({ ...formOption, event });
  }

  public actions = {
    autocomplete: (formOption?: FormOption) =>
      this.createAction({ formOption }, FormActions.CHANGE),
    optionSelected: (formOption?: FormOption) =>
      this.optionSelected(formOption),
  };

  public events = {
    edit: (formOption?: FormOption) => this.edit(formOption),
    add: (formOption?: FormOption) => this.add(formOption),
    create: (formOption?: FormOption) => this.create(formOption),
    clear: (formOption?: FormOption) => this.clear(formOption),
    disable: () => this.disable(),
    updateOptions: (formOption?: FormOption) => this.updateOptions(formOption),
    delete: (formOption?: FormOption) => this.delete(formOption),
    submit: (formOption?: FormOption) => this.submit(formOption),
    update: (formOption?: FormOption) => this.update(formOption),
  };

  public on(event: FormActions): Observable<FormOption> {
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
  //   autocomplete: () => this.getStateByAction([FormActions.CHANGE]),
  //   optionSelected: () =>
  //     this.getStateByAction([FormActions.SELECTED]),
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
