import { Injectable } from '@angular/core';
import { BehaviorSubject, map, mergeMap, startWith, Subject } from 'rxjs';
import { RouterService, BreakpointService } from '../../../services/services';
export interface Portion {
  content: number;
  drawer: number;
  show: boolean;
  opened: boolean;
  mobile: boolean;
  hasButton: boolean;
}
export interface DrawerPortion {
  // ** width in % of the drawer when open - 0 by default
  open: number;

  // ** width in % of the drawer when closed - 0 by default
  close: number;

  // ** if the drawer have an inner button - false by default
  hasButton: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private drawerState$: BehaviorSubject<DrawerPortion>;

  private openChanged$: Subject<boolean>;

  constructor(
    private breakpointService: BreakpointService,
    private routerService: RouterService
  ) {
    this.drawerState$ = new BehaviorSubject<DrawerPortion>({
      open: 0,
      close: 0,
      hasButton: false,
    });

    this.openChanged$ = new Subject();
  }

  getDrawerPortion() {
    return this.drawerState$.getValue();
  }

  listenToDrawerPortion() {
    return this.drawerState$.asObservable();
  }

  emitDrawerPortion(value: DrawerPortion) {
    this.drawerState$.next(value);
  }

  destroyDrawer() {
    this.drawerState$.next({ close: 0, open: 0, hasButton: false });
  }

  emitOpenChanged(value: boolean) {
    this.openChanged$.next(value);
  }

  listenToOpenChanged() {
    return this.openChanged$.asObservable();
  }

  // routing logic
  handleShow(list: string[]) {
    return this.routerService.getLastPath$().pipe(
      startWith(this.routerService.getCurrentPath()),
      map((path: string) => {
        return this.findPath([...list], path);
      })
    );
  }

  private findPath(list: string[], value: string): boolean {
    return list?.some((path: string) => path == value);
  }

  // mobile logic
  isMobile() {
    return this.breakpointService
      .isSmall()
      .pipe(
        mergeMap((isSmall) =>
          this.breakpointService
            .isMobile()
            .pipe(map((isMobile) => [isSmall, isMobile]))
        )
      );
  }
}
