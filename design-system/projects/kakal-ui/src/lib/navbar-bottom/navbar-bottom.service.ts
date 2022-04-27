import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarBottomService {
  private showNext$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private showSave$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private showBack$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private showNextMiddle$: BehaviorSubject<{show: boolean, next: boolean}> = new BehaviorSubject({show: false, next: true});

  private next$: Subject<void> = new Subject();
  private save$: Subject<void> = new Subject();
  private back$: Subject<void> = new Subject();
  private nextMiddle$: Subject<void> = new Subject();
  private formGroup$: Subject<FormGroup> = new Subject();

  private disableNext$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private autoBack$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {
  }

  getShowNext(): BehaviorSubject<boolean> {
    return this.showNext$;
  }
  setShowNext(val: boolean) {
    this.showNext$.next(val);
  }

  getShowSave(): BehaviorSubject<boolean> {
    return this.showSave$;
  }
  setShowSave(val: boolean) {
    this.showSave$.next(val);
  }

  getShowBack(): BehaviorSubject<boolean> {
    return this.showBack$;
  }
  setShowBack(val: boolean) {
    this.showBack$.next(val);
  }

  getShowNextMiddle(): BehaviorSubject<{show: boolean, next: boolean}> {
    return this.showNextMiddle$;
  }
  setShowNextMiddle(val: {show: boolean, next: boolean}) {
    this.showNextMiddle$.next(val);
  }

  getDisableNext(): BehaviorSubject<boolean> {
    return this.disableNext$;
  }
  setDisableNext(val: boolean) {
    this.disableNext$.next(val);
  }

  getAutoBack(): BehaviorSubject<boolean> {
    return this.autoBack$;
  }
  setAutoBack(val: boolean) {
    this.autoBack$.next(val);
  }


  getFormGroup(): Subject<FormGroup> {
    return this.formGroup$;
  }
  setFormGroup(val: FormGroup) {
    this.formGroup$.next(val);
  }



  getSave(): Subject<void> {
    return this.save$;
  }
  setSave() {
    this.save$.next();
  }

  getBack(): Subject<void> {
    return this.back$;
  }
  setBack() {
    this.back$.next();
  }


  getNext(): Subject<void> {
    return this.next$;
  }
  setNext() {
    this.next$.next();
  }

  getNextMiddle(): Subject<void> {
    return this.nextMiddle$;
  }
  setNextMiddle() {
    this.nextMiddle$.next();
  }

}
