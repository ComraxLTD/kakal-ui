import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private hideWizard$: BehaviorSubject<boolean>;
  private currentPath$: BehaviorSubject<string>;

  constructor() {
    this.hideWizard$ = new BehaviorSubject<boolean>(false);
    this.currentPath$ = new BehaviorSubject<string>('');
  }

  public getWizardObs(): Observable<boolean> {
    return this.hideWizard$.asObservable();
  }

  public toggleWizard(value: boolean) {
    return this.hideWizard$.next(value);
  }

  public getCurrentPathObs(): Observable<string> {
    return this.currentPath$.asObservable();
  }

  public emitCurrentPath(value: string) {
    return this.currentPath$.next(value);
  }
}
