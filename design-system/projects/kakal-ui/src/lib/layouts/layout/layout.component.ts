import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { RouterService, BreakpointService } from '../../../services/services';
import { MenuCard } from '../../menu-bar/menu-card/menu-card.component';
import { PageHeadlineService } from '../../page-headline/page-headline.service';
import { PageHeadline } from '../../page-headline/page-headline.component';

import { map, startWith } from 'rxjs/operators';
import { BehaviorSubject, merge, Observable, of, mergeMap } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { LayoutService } from './layout.service';
import { ButtonModel } from '../../button/models/button.types';

@Component({
  selector: 'kkl-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @ViewChild('menuDrawer') sidenav: MatSidenav;
  @Input() showStatusPath: string[];
  @Input() cards: MenuCard[];

  selectedOpen: string;
  @Input() contentPortion: { open: number; close: number } = {
    open: 0,
    close: 100,
  };

  @Input() drawerAction: ButtonModel;

  // drawer props
  portion$: Observable<number> = of(100);
  showStartDrawer$: Observable<boolean>;

  endDrawerSizeSource$: BehaviorSubject<number>;
  endDrawerSize$: Observable<number> = of(0);

  //end drawer opened/closed
  _endDrawerOpen: boolean = false;
  showEndDrawer: boolean = false;

  //drawer sizes
  _openDrawer!: number;
  _closedDrawer!: number;

  @Output() openChanged: EventEmitter<boolean> = new EventEmitter();

  showStatus$: Observable<boolean>;

  mobile$: Observable<boolean>;

  @Output() logoClicked: EventEmitter<void> = new EventEmitter();
  @Output() menuSelected: EventEmitter<MenuCard> = new EventEmitter();

  constructor(
    private routerService: RouterService,
    private breakpointService: BreakpointService,
    private layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    this.showStatus$ = this.handleShowState(this.showStatusPath);
    this.mobile$ = this.breakpointService.isMobile();

    this._openDrawer = this.contentPortion.open;
    this._closedDrawer = this.contentPortion.close;

    this.endDrawerSizeSource$ = new BehaviorSubject(0);

    // init actions if array exist

    this.portion$ = this.getBreakPoints();

    this.endDrawerSize$ = this.endDrawerSizeSource$.asObservable();

    this.showStartDrawer$ = this.layoutService.listenToStartDrawer();
  }

  private handleShowState(list: string[]) {
    return this.routerService.getLastPath$().pipe(
      startWith(this.routerService.getCurrentPath()),
      map((path: string) => {
        return this.findPath(list, path);
      })
    );
  }

  private findPath(list: any[], value: string): boolean {
    return !!list?.find((path: string) => path == value);
  }

  onLogoClicked() {
    this.logoClicked.emit();
  }

  onMenuSelected(event) {
    this.sidenav.close();
    this.menuSelected.emit(event);
  }

  onStartSideNav(val: string) {
    this.selectedOpen = val;

    this.sidenav.toggle();
  }
  // control content width when end drawer is open and close in %

  // PORTION LOGIC SECTION

  // breakpoints
  private mergeBreakPoints() {
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

  private getBreakPoints() {
    return this.mergeBreakPoints().pipe(
      map((value: boolean[]) => {
        if (value.includes(true)) {
          this._openDrawer = 1;
          this._closedDrawer = 99;
        } else {
          this._openDrawer = this.contentPortion.open;
          this._closedDrawer = this.contentPortion.close;
        }
        this.endDrawerSizeSource$.next(this._openDrawer);
        return 100 - this._openDrawer;
      })
    );
  }

  // function called each time the left(end) drawer is closed/opened
  emitEndDrawer(): void {
    let portion: number = 0;

    this._endDrawerOpen = !this._endDrawerOpen;
    if (!this._endDrawerOpen) {
      portion = 100 - this._openDrawer;
      this.portion$ = of(portion);
      this.endDrawerSizeSource$.next(this._openDrawer);
    } else {
      portion = 100 - this._closedDrawer;
      this.portion$ = of(portion);
      this.endDrawerSizeSource$.next(this._closedDrawer);
    }
    this.openChanged.emit(this._endDrawerOpen);
  }
}
