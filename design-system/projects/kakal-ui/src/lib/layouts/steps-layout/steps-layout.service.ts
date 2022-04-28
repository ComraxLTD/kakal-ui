import { Injectable } from '@angular/core';
import { CardStepModel } from '../../cards/card-step/card-step.model';
import { StepsSelectionEvent } from '../../stepper/stepper.component';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ButtonModel } from '../../button/models/button.types';

interface buttAction{
  action: 'add' | 'remove' | 'disable' | 'removeAll' | 'enable';
  key?: string;
  butt?: ButtonModel[];
}
@Injectable({
  providedIn: 'root',
})
export class StepsLayoutService {
  private buttonAction$: Subject<buttAction> = new Subject();

  private buttonClicked$: Subject<ButtonModel> = new Subject();

  constructor() {
  }

  getButtonAction(): Subject<buttAction> {
    return this.buttonAction$;
  }
  addButton(val: ButtonModel[]) {
    this.buttonAction$.next({action: 'add', butt: val});
  }
  removeAllButtons() {
    this.buttonAction$.next({action: 'removeAll'});
  }
  removeButton(val: string) {
    this.buttonAction$.next({action: 'remove', key: val});
  }
  disableButton(val: string) {
    this.buttonAction$.next({action: 'disable', key: val});
  }
  enableButton(val: string) {
    this.buttonAction$.next({action: 'enable', key: val});
  }

  getButtonClicked(): Subject<ButtonModel> {
    return this.buttonClicked$;
  }
  setButtonClicked(butt: ButtonModel) {
    this.buttonClicked$.next(butt);
  }
}
