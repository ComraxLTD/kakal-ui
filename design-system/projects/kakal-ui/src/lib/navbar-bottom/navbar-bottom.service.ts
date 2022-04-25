import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, last, map, Observable, Subject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarBottomService {
  showNext$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  showSave$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  showBack$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  showNextMiddle$: BehaviorSubject<{show: boolean, next: boolean}> = new BehaviorSubject({show: false, next: true});

  next$: Subject<void> = new Subject();
  save$: Subject<void> = new Subject();
  back$: Subject<void> = new Subject();
  nextMiddle$: Subject<void> = new Subject();
  formGroup$: Subject<FormGroup> = new Subject();

  disableNext$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  autoBack$: BehaviorSubject<boolean> = new BehaviorSubject(true);

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
