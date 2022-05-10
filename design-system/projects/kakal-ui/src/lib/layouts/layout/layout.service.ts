import { Injectable } from '@angular/core';
import { BehaviorSubject, map, mergeMap, startWith } from 'rxjs';
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
  open: number;
  close: number;
  hasButton: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  drawerState$: BehaviorSubject<DrawerPortion>;


  constructor(
    private breakpointService: BreakpointService,
    private routerService: RouterService
  ) {
    this.drawerState$ = new BehaviorSubject<DrawerPortion>({
      open: 0,
      close: 0,
      hasButton: false,
    });
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
