import { Injectable } from '@angular/core';
import { ButtonModel } from '../../button/models/button.types';
import { Observable, Subject } from 'rxjs';

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

  private buttonClicked$: Subject<ButtonModel> = new Subject();

  constructor() {}

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

  getButtonClicked(): Observable<ButtonModel> {
    return this.buttonClicked$.asObservable();
  }

  setButtonClicked(butt: ButtonModel) {
    this.buttonClicked$.next(butt);
  }
}
