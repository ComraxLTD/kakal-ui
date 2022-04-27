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
  private formGroup$: BehaviorSubject<FormGroup> = new BehaviorSubject(
    new FormGroup({})
  );

  private next$: Subject<void> = new Subject();
  private save$: Subject<void> = new Subject();
  private back$: Subject<void> = new Subject();
  private nextMiddle$: Subject<void> = new Subject();

  private disableNext$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private autoBack$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {}

  hideButtons() {
    this.setShowNext(false)
    this.setShowSave(false)
  }

  getShowNext(): Observable<boolean> {
    return this.showNext$.asObservable();
  }
  setShowNext(val: boolean) {
    this.showNext$.next(val);
  }

  getShowSave(): Observable<boolean> {
    return this.showSave$.asObservable();
  }

  setShowSave(val: boolean) {
    this.showSave$.next(val);
  }

  getShowBack(): Observable<boolean> {
    return this.showBack$.asObservable();
  }
  setShowBack(val: boolean) {
    this.showBack$.next(val);
  }

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

  getFormGroup(): FormGroup {
    return this.formGroup$.getValue();
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

  getNextMiddle(): Observable<void> {
    return this.nextMiddle$.asObservable();
  }
  setNextMiddle() {
    this.nextMiddle$.next();
  }
}
