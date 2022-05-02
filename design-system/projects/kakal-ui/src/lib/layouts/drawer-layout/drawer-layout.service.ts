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

  showStartDrawer(value: boolean): void {
    this.drawer$.next(value);
  }


  listenToStartDrawer(): Observable<boolean> {
    return this.drawer$.asObservable();
  }
}
