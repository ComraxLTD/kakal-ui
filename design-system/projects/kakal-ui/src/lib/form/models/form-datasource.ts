import {
  BehaviorSubject,
  filter,
  map,
  mapTo,
  merge,
  Observable,
  pluck,
  startWith,
  Subject,
} from 'rxjs';
import { FormActions } from './form.actions';
import { FormChangeEvent } from './form.options';

export class FormDataSource {
  // subject which handle form logic
  private formStateSubject: BehaviorSubject<FormChangeEvent>;
  private formState$: Observable<FormChangeEvent>;

  constructor() {
    this.formStateSubject = new BehaviorSubject<FormChangeEvent>(null);
  }

  public getFormState$(): Observable<FormChangeEvent> {
    return this.formStateSubject.asObservable();
  }

  public getFormState(): FormChangeEvent {
    return this.formStateSubject.value;
  }

  // method  which return form state filtered by events[]
  private getStateByAction(
    actions?: FormActions[]
  ): Observable<FormChangeEvent> {
    return this.formStateSubject.asObservable().pipe(
      filter((formState) => !!formState),
      filter((formState: FormChangeEvent) => {
        return actions ? actions.indexOf(formState.action) !== -1 : true;
      })
    );
  }

  private createAction<T>(prop: { formChangeEvent: FormChangeEvent }) {
    const { formChangeEvent } = prop;
    this.formStateSubject.next({
      ...formChangeEvent,
      action: formChangeEvent.action,
    });
  }

  public dispatch(formChangeEvent: FormChangeEvent) {
    return this.createAction({ formChangeEvent });
  }

  public listen(
    action?: FormActions | FormActions[]
  ): Observable<FormChangeEvent> {
    const listenTo: FormActions[] =
      typeof action == 'object' ? action : [action];

    return this.getStateByAction(listenTo);
  }



  // method  which return only form events
  public getEvents(actions?: FormActions[]): Observable<FormActions> {
    return this.getFormState$().pipe(
      // map((formChangeEvent: FormChangeEvent) => formChangeEvent.action),
      pluck('action'),
      filter((action) => (actions ? actions.indexOf(action) !== -1 : true))
    );
  }

  public toggleEvent(
    trueEvents: FormActions[],
    falseEvents: FormActions[]
  ): Observable<boolean> {
    const true$ = this.getEvents(trueEvents).pipe(mapTo(true));
    const false$ = this.getEvents(falseEvents).pipe(mapTo(false));
    return merge(true$, false$);
  }
}
