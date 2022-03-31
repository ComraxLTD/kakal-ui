import { Component, Input, OnInit } from '@angular/core';
import { MenuComponent } from '../../menu/menu.component';
import { RouterService, BreakpointService } from '../../../services/services';

import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'kkl-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @Input() public showStatusPath: string[];

  @Input() public menu: MenuComponent;

  public currentPath$: Observable<string>;
  public show$: Observable<boolean>;
  public mobile$: Observable<boolean>;

  constructor(
    private routerService: RouterService,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.currentPath$ = this.routerService.getLastPathObs();
    this.show$ = this.handleShowState(this.showStatusPath);
    this.mobile$ = this.breakpointService.isMobile();
  }

  private handleShowState(list: string[]) {
    return this.currentPath$.pipe(
      startWith(this.routerService.getCurrentPath()),
      map((path: string) => {
        return this.findPath(list, path);
      })
    );
  }

  private findPath(list: any[], value: string): boolean {
    return !!list?.find((path: string) => path == value);
  }
}
