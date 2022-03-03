import {
  filter,
  map,
  mapTo,
  merge,
  Observable,
  startWith,
  Subject,
} from 'rxjs';
import { FormEvents } from './form-events';
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
    formOption: FormOption = { event: FormEvents.DEFAULT }
  ): Observable<FormOption> {
    return this.formState$.pipe(startWith(formOption));
  }

  // method  which return form state filtered by events[]
  public getFormStateWithFilterEvents(
    events?: FormEvents[]
  ): Observable<FormOption> {
    return this.getFormState$().pipe(
      filter((formOption) => {
        return events ? events.indexOf(formOption.event) !== -1 : true;
      })
    );
  }
  // method  which return only form events
  public getEvents(events?: FormEvents[]): Observable<FormEvents> {
    return this.getFormState$().pipe(
      map((formOption: FormOption) => formOption.event),
      filter((event) => (events ? events.indexOf(event) !== -1 : true))
    );
  }

  // FORM EVENTS SECTION

  // use when delete item form array
  private autocomplete(formOption?: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormEvents.CHANGE });
  }

  //  use when update form - formGroup.pathValue/setValue
  private edit(formOption?: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormEvents.EDIT });
  }

  //  use when reset form - formGroup.reset()
  private clear(formOption?: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormEvents.CLEAR });
  }
  //  use when reset form disable - formGroup.disabled()
  private disable() {
    this.formStateSubject.next({ event: FormEvents.DISABLED });
  }

  //  use when update form options
  private updateOptions(formOption?: FormOption) {
    // this.formStateSubject.next({ ...formOption, event: 'updateOptions' });
  }

  // DATA EVENTS SECTION

  // use when delete item form array
  private delete(formOption?: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormEvents.DELETE });
  }

  // use to create new item
  private create(formOption?: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormEvents.CREATE });
  }

  // use when to add created item
  private add(formOption?: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormEvents.ADD });
  }

  // use when save item form array
  private save(formOption?: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormEvents.SAVE });
  }

  // use when save item form array
  private update(formOption?: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormEvents.UPDATE });
  }

  private optionSelected(formOption: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormEvents.SELECTED });
  }

  private submit(formOption: FormOption) {
    this.formStateSubject.next({ ...formOption, event: FormEvents.SUBMIT });
  }

  private createAction<T>(prop: { state: T }, event?: FormEvents) {
    const { state } = prop;
    this.formStateSubject.next({ ...state, event });
  }

  public actions = {
    edit: (formOption?) => this.edit(formOption),
    add: (formOption?) => this.add(formOption),
    create: (formOption?) => this.create(formOption),
    clear: (formOption?) => this.clear(formOption),
    disable: () => this.disable(),
    updateOptions: (formOption?) => this.updateOptions(formOption),
    delete: (formOption?) => this.delete(formOption),
    save: (formOption?) => this.save(formOption),
    submit: (formOption?) => this.submit(formOption),
    update: (formOption?) => this.update(formOption),
    autocomplete: (formOption?) => this.autocomplete(formOption),
    optionSelected: (formOption?) => this.optionSelected(formOption),
  };

  public listen = {
    edit: () => this.getFormStateWithFilterEvents([FormEvents.EDIT]),
    add: () => this.getFormStateWithFilterEvents([FormEvents.ADD]),
    create: () => this.getFormStateWithFilterEvents([FormEvents.CREATE]),
    clear: () => this.getFormStateWithFilterEvents([FormEvents.CLEAR]),
    disable: () => this.getFormStateWithFilterEvents([FormEvents.DELETE]),
    updateOptions: () => this.getFormStateWithFilterEvents([FormEvents.EDIT]),
    delete: () => this.getFormStateWithFilterEvents([FormEvents.DELETE]),
    save: () => this.getFormStateWithFilterEvents([FormEvents.SAVE]),
    submit: () => this.getFormStateWithFilterEvents([FormEvents.SUBMIT]),
    update: () => this.getFormStateWithFilterEvents([FormEvents.UPDATE]),
    autocomplete: () => this.getFormStateWithFilterEvents([FormEvents.CHANGE]),
    optionSelected: () =>
      this.getFormStateWithFilterEvents([FormEvents.SELECTED]),
  };

  public toggleEvent(
    trueEvents: FormEvents[],
    falseEvents: FormEvents[]
  ): Observable<boolean> {
    const true$ = this.getEvents(trueEvents).pipe(mapTo(true));
    const false$ = this.getEvents(falseEvents).pipe(mapTo(false));
    return merge(true$, false$);
  }
}
