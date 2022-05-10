import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarBottomService {
  private showNext$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private showSave$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private showBack$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private showNextMiddle$: BehaviorSubject<{ show: boolean; next: boolean }> =
    new BehaviorSubject({ show: false, next: true });

  private next$: Subject<void> = new Subject();
  private save$: Subject<void> = new Subject();
  private back$: Subject<void> = new Subject();
  private nextMiddle$: Subject<void> = new Subject();
  private formGroup$: Subject<FormGroup> = new Subject();

  private nextLabel$: BehaviorSubject<string> = new BehaviorSubject('המשך');

  private disableNext$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private autoBack$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {}

  // next button methods
  getShowNext(): BehaviorSubject<boolean> {
    return this.showNext$;
  }
  setShowNext(val: boolean) {
    this.showNext$.next(val);
  }

  // save button methods
  getShowSave(): Observable<boolean> {
    return this.showSave$.asObservable();
  }
  setShowSave(val: boolean) {
    this.showSave$.next(val);
  }

  // previous button methods
  getShowBack(): Observable<boolean> {
    return this.showBack$.asObservable();
  }
  setShowBack(val: boolean) {
    this.showBack$.next(val);
  }

  // next middle button methods
  getShowNextMiddle(): Observable<{ show: boolean; next: boolean }> {
    return this.showNextMiddle$.asObservable();
  }
  setShowNextMiddle(val: { show: boolean; next: boolean }) {
    this.showNextMiddle$.next(val);
  }

  getDisableNext(): Observable<boolean> {
    return this.disableNext$.asObservable();
  }
  setDisableNext(val: boolean) {
    this.disableNext$.next(val);
  }

  getAutoBack(): Observable<boolean> {
    return this.autoBack$.asObservable();
  }
  setAutoBack(val: boolean) {
    this.autoBack$.next(val);
  }

  getFormGroup(): Observable<FormGroup> {
    return this.formGroup$.asObservable();
  }
  setFormGroup(val: FormGroup) {
    this.formGroup$.next(val);
  }

  getSave(): Observable<void> {
    return this.save$.asObservable();
  }
  setSave() {
    this.save$.next();
  }

  getBack(): Observable<void> {
    return this.back$.asObservable();
  }
  setBack() {
    this.back$.next();
  }

  getNext(): Observable<void> {
    return this.next$.asObservable();
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
