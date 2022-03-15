import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { BreakpointService } from '../../services/breakpoint.service';
import { RouterService } from '../../services/route.service';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';
import { IconModel } from '../../lib/icon/icon.model';
import { MenuComponent } from '../../lib/menu/menu.component';
import { StepperComponent } from '../../lib/stepper/stepper.component';

@Component({
  selector: 'kkl-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @Input() public openIcon: string;
  @Input() public logos: IconModel[];
  @Input() public hideWizardPath: string[];
  @Input() public showStatusPath: string[];
  @Input() public wizardCards: number;

  @Input() public menu: MenuComponent;
  @Input() public wizard: StepperComponent;

  public currentPath$: Observable<string>;
  public wizard$: Observable<boolean>;
  public show$: Observable<boolean>;
  public mobile$: Observable<boolean>;

  constructor(
    private routerService: RouterService,
    private breakpointService: BreakpointService
  ) { }

  ngOnInit(): void {
    this.currentPath$ = this.routerService.getLastPathObs();
    this.show$ = this.handleShowState(this.showStatusPath);
    this.wizard$ = this.handleShowState(this.hideWizardPath);
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
    return !!list.find((path: string) => path == value);
  }
  public onClose(drawer: MatDrawer): void {
    if (drawer.opened) {
      // drawer.close();
    }
  }
}
