import { Injectable } from '@angular/core';
import { ButtonModel } from '../../button/models/button.types';
import { BehaviorSubject, filter, Observable, Subject } from 'rxjs';
import { DrawerLayoutService } from '../drawer-layout/drawer-layout.service';
import { StepsSelectionEvent } from '../../groups/step-group/step-group.component';

export interface ActionButtonState {
  action: 'add' | 'remove' | 'disable' | 'removeAll' | 'enable';
  key?: string;
  buttons?: ButtonModel[];
  disabled?: { [key: string]: boolean };
}
@Injectable({
  providedIn: 'root',
})
export class StepsLayoutService {
  private actionState$: Subject<ActionButtonState> = new Subject();

  private actionClicked$: Subject<ButtonModel> = new Subject();

  private stepsSelectionEvent$: BehaviorSubject<StepsSelectionEvent>;

  constructor(private drawerLayoutService: DrawerLayoutService) {
    this.stepsSelectionEvent$ = new BehaviorSubject<StepsSelectionEvent>(
      {} as StepsSelectionEvent
    );
  }

  getStepsSelection(): StepsSelectionEvent {
    return this.stepsSelectionEvent$.getValue();
  }

  listenToStepsSelection(): Observable<StepsSelectionEvent> {
    return this.stepsSelectionEvent$.asObservable();
  }

  setStepsSelection(value: StepsSelectionEvent): void {
    return this.stepsSelectionEvent$.next(value);
  }

  getButtonAction(): Observable<ActionButtonState> {
    return this.actionState$.asObservable();
  }

  addButton(val: ButtonModel[]) {
    this.actionState$.next({ action: 'add', buttons: val });
  }

  removeAllButtons() {
    this.actionState$.next({ action: 'removeAll' });
  }

  removeButton(val: string) {
    this.actionState$.next({ action: 'remove', key: val });
  }
  disableButton(val: string) {
    this.actionState$.next({ action: 'disable', key: val });
  }

  enableButton(val: string) {
    this.actionState$.next({ action: 'enable', key: val });
  }

  // *** use to listen to the left action buttons
  listenToActionButtons(filters?: string[]): Observable<ButtonModel> {
    return this.actionClicked$
      .asObservable()
      .pipe(
        filter((action: ButtonModel) =>
          (filters && filters.length) ? filters.includes(action.type) : true
        )
      );
  }

  // *** use to set the action buttons
  emitActionButton(button: ButtonModel) {
    this.actionClicked$.next(button);
  }

  // *** use to show drawer button
  showDrawer() {
    this.drawerLayoutService.show();
  }
  // *** use to hide side drawer button
  hideDrawer() {
    this.drawerLayoutService.hide();
  }
}
