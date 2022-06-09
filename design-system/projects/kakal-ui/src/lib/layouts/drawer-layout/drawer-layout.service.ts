import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerLayoutService {
  private drawer$: BehaviorSubject<boolean>;
  private toggle$: Subject<boolean>;

  constructor() {
    this.drawer$ = new BehaviorSubject<boolean>(false);
    this.toggle$ = new Subject();
  }

  show() {
    this.drawer$.next(true);
  }

  hide() {
    this.drawer$.next(false);
  }

  listenToStartDrawer(): Observable<boolean> {
    return this.drawer$.asObservable();
  }

  emitToggle(value: boolean) {
    this.toggle$.next(value);
  }

  listenToToggle() {
    return this.toggle$.asObservable();
  }
}
