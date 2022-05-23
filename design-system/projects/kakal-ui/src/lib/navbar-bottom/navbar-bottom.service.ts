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
  private saveLabel$: BehaviorSubject<string> = new BehaviorSubject('שמור');

  private disableNext$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private autoBack$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {}

  // show next button methods
  listenToShowNext(): BehaviorSubject<boolean> {
    return this.showNext$;
  }
  setShowNext(val: boolean) {
    this.showNext$.next(val);
  }

  // show save button methods
  listenToShowSave(): Observable<boolean> {
    return this.showSave$.asObservable();
  }
  setShowSave(val: boolean) {
    this.showSave$.next(val);
  }

  // show previous button methods
  listenToShowBack(): Observable<boolean> {
    return this.showBack$.asObservable();
  }
  setShowBack(val: boolean) {
    this.showBack$.next(val);
  }

  // show next middle button methods
  listenToShowNextMiddle(): Observable<{ show: boolean; next: boolean }> {
    return this.showNextMiddle$.asObservable();
  }
  setShowNextMiddle(val: { show: boolean; next: boolean }) {
    this.showNextMiddle$.next(val);
  }

  // next disable button methods
  listenToDisableNext(): Observable<boolean> {
    return this.disableNext$.asObservable();
  }

  setDisableNext(val: boolean) {
    this.disableNext$.next(val);
  }

  listenToAutoBack(): Observable<boolean> {
    return this.autoBack$.asObservable();
  }
  setAutoBack(val: boolean) {
    this.autoBack$.next(val);
  }

  listenToFormGroup(): Observable<FormGroup> {
    return this.formGroup$.asObservable();
  }
  setFormGroup(val: FormGroup) {
    this.formGroup$.next(val);
  }

  listenToSave(): Observable<void> {
    return this.save$.asObservable();
  }

  setSave() {
    this.save$.next();
  }

  listenToBack(): Observable<void> {
    return this.back$.asObservable();
  }
  setBack() {
    this.back$.next();
  }

  listenToNext(): Observable<void> {
    return this.next$.asObservable();
  }
  setNext() {
    this.next$.next();
  }

  listenToNextMiddle(): Subject<void> {
    return this.nextMiddle$;
  }
  setNextMiddle() {
    this.nextMiddle$.next();
  }

  setNextLabel(value: string): void {
    this.nextLabel$.next(value);
  }
  listenNextLabel(): Observable<string> {
    return this.nextLabel$.asObservable();
  }

  listenSaveLabel(): Observable<string> {
    return this.saveLabel$.asObservable();
  }

  seSaveLabel(val: string) {
    this.saveLabel$.next(val);
  }
}
