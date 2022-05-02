import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerLayoutService {
  private drawer$: BehaviorSubject<boolean>;

  constructor() {
    this.drawer$ = new BehaviorSubject<boolean>(false);
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
}
