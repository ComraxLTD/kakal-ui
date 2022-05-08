import { Injectable } from '@angular/core';
import { map, mergeMap, startWith } from 'rxjs';
import { RouterService, BreakpointService } from '../../../services/services';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  constructor(
    private breakpointService: BreakpointService,
    private routerService: RouterService
  ) {}

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
