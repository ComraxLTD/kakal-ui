import { Component, Inject, Input, OnInit } from '@angular/core';
import { Subscription, Observable, of } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import {
  CardStepModel,
  StepperDirection,
} from '../../components/cards/card-step/card-step.model';
import { IconModel } from '../../components/icon/icon.model';
import { MenuModel } from '../../components/menu/menu.model';
import { MenuService } from '../../components/menu/menu.service';
import { NavbarService } from '../../components/navbar/navbar.service';
import { LayoutService } from '../../screens/layout/layout.service';
import { RouterService } from '../../utilities/services/route.service';

@Component({
  selector: 'app-layout-ex',
  templateUrl: './layout-ex.component.html',
  styleUrls: ['./layout-ex.component.scss'],
})
export class LayoutExComponent implements OnInit {
  @Input() public projectPrefix: string = '';
  @Input() public logos: IconModel[];
  @Input() public status: CardStepModel[];
  @Input() public steps: CardStepModel[];
  @Input() public menu: MenuModel[];

  // path 
  private pathSubscription: Subscription;

  // NAVBAR SECTION
  private headers = { lands: 'מקרקעין', neches: 'מנהלת ספר נכסים' };
  public openIcon: string = 'treegradientlands';
  public showStatusPath: string[] = [this.projectPrefix, 'screen-layout--with-wizard'];

  // WIZARD SECTION
  public steps$: Observable<CardStepModel[]>;
  public direction: StepperDirection = 'column';
  public hideWizardPath: string[] = ['results', this.projectPrefix];

  // MENU SECTION
  public menu$: Observable<MenuModel[]>;

  constructor(
    private menuService: MenuService,
    private navbarService: NavbarService,
    private layoutService: LayoutService,
    private routerService: RouterService
  ) {}

  // ROUTE METHODS SECTION
  private setCurrentPath() {
    // const path = this.routerService.getCurrentPath();
    // this.layoutService.emitCurrentPath(path);
  }

  ngOnInit(): void {
    this.setCurrentPath();
    this.setNavbar();
    // this.steps$ = this.setWizard();
    // this.menu$ = this.setMenu();

    if (this.steps) {
      this.steps$ = of(this.steps);
    }
    if (this.menu) {
      this.menu$ = of(this.menu);
    }
    this.subscribeToRouter();
  }

  ngOnDestroy(): void {
    if (this.pathSubscription) {
      this.pathSubscription.unsubscribe();
    }
  }

  private setNavbar() {
    this.navbarService.setHeaders(this.headers);

    if (this.status) {
      this.navbarService.emitStatus(this.status);
    }

    this.navbarService.setHeadersObs(of('lands'));
    this.logos = this.logos;
  }

  private setHeaders() {
    // return this.routerService.getModulePrefixObs().pipe(
    //   distinctUntilChanged(),
    //   map((path: string) => this.headers[path])
    // );
  }

  private subscribeToRouter() {
    // this.pathSubscription = this.routerService
    //   .getLastPathObs()
    //   .subscribe((path: string) => {
    //     path === this.projectPrefix && this.navbarService.emitTitle(path);
    //     this.layoutService.emitCurrentPath(path);
    //     this.routerService.currentPath$.next(path);
    //   });
  }

  private setWizard() {
    // return this.routerService.getModulePrefixObs().pipe(
    //   map((path: string) => {
    //     const steps = this.steps;
    //     steps.map((step) => {
    //       if (step.isActive) {
    //         step.unactive();
    //       }
    //       if (step.path === path) {
    //         step.active();
    //       }
    //     });
    //     return steps;
    //   })
    // );
  }

  private setMenu() {
    // const modulePath$ = this.routerService.getModulePrefixObs();
    // const lastPath$ = this.layoutService.getCurrentPathObs();
    // return modulePath$.pipe(
    //   switchMap((modulePath: string) => {
    //     return lastPath$.pipe(
    //       map((path: string) => {
    //         const menu = this.menuService.setMenu(
    //           this.menu,
    //           modulePath,
    //           'path',
    //           path
    //         );
    //         return menu;
    //       })
    //     );
    //   })
    // );
    // return path$.pipe(
    //   // distinctUntilChanged(),
    //   map((path: string) => {
    //     console.log(path)
    //     return this.menuService.setList(this.menuService.getMenu(), 'path', path);
    //   })
    // )
  }

  public onChangeModule(step: CardStepModel) {
    // const path: string = `${this.projectPrefix}/${step.path}`;
    // this.routerService.navigate(path);
  }

  public onChangeMenu(path: string) {
    // path = `${this.projectPrefix}/${path}`;
    // this.routerService.navigate(path);
  }
}
