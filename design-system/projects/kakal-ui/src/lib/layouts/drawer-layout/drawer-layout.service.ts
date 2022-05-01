import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerLayoutService {
  private startDrawer$: BehaviorSubject<boolean>;

  constructor() {
    this.startDrawer$ = new BehaviorSubject<boolean>(false);
  }

  showStartDrawer(value: boolean): void {
    this.startDrawer$.next(value);
  }


  listenToStartDrawer(): Observable<boolean> {
    return this.startDrawer$.asObservable();
  }
}
