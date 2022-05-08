import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import { RouterService, BreakpointService } from '../../../services/services';
import { MenuCard } from '../../menu-bar/menu-card/menu-card.component';
import { PageHeadline } from '../../page-headline/page-headline.component';

import { MatSidenav } from '@angular/material/sidenav';

import { CardStatus } from '../../cards/card-status/card-status.component';
import { ROOT_PREFIX } from '../../../constants/root-prefix';
import { StatusSelectionEvent } from '../../groups/status-group/status-group.component';

import { BehaviorSubject, Observable, of, mergeMap } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'kkl-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @ViewChild('menuDrawer') sidenav: MatSidenav;

  @Input() menuTemplates: { [key: string]: TemplateRef<any> };

  @Input() cards: MenuCard[];
  @Input() status: CardStatus[];
  @Input() showStatusPath: string[];
  @Input() hideFooterPath: string[];

  @Input() showEndDrawer: boolean = false;
  @Input() drawerPortion: { open: number; close: number } = {
    open: 0,
    close: 0,
  };

  selectedOpen: string;

  // drawer props
  portion$: Observable<number> = of(100);
  // drawer props
  portionState$: Observable<{ content: number; drawer: number }> = of({
    content: 100,
    drawer: 0,
  });

  endDrawerSizeSource$: BehaviorSubject<number>;
  endDrawerSize$: Observable<number> = of(0);

  //end drawer opened/closed
  _endDrawerOpen: boolean = false;

  //drawer sizes
  _openDrawer!: number;
  _closedDrawer!: number;

  pageHeadline$: Observable<PageHeadline[]>;

  showStatus$: Observable<boolean>;
  hideFooter$: Observable<boolean>;

  mobile$: Observable<boolean>;

  @Output() openChanged: EventEmitter<boolean> = new EventEmitter();
  @Output() logoClicked: EventEmitter<void> = new EventEmitter();
  @Output() menuSelected: EventEmitter<MenuCard> = new EventEmitter();
  @Output() statusSelection: EventEmitter<StatusSelectionEvent> =
    new EventEmitter<StatusSelectionEvent>();

  constructor(
    private routerService: RouterService,
    private breakpointService: BreakpointService,
    @Inject(ROOT_PREFIX) public rootPrefix: string
  ) {}

  ngOnInit(): void {
    this.mobile$ = this.breakpointService.isMobile();
    this.showStatus$ = this.handleShow(this.showStatusPath || []);
    this.hideFooter$ = this.handleShow([...this.hideFooterPath, '']);

    this._openDrawer = this.drawerPortion.open;
    this._closedDrawer = this.drawerPortion.close;

    this.endDrawerSizeSource$ = new BehaviorSubject(0);

    this.portionState$ = this.setPortionState$();

    this.endDrawerSize$ = this.endDrawerSizeSource$.asObservable();
  }

  private handleShow(list: string[]) {
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

  onLogoClicked() {
    this.logoClicked.emit();
  }

  onMenuSelected(event) {
    this.sidenav.close();
    this.menuSelected.emit(event);
  }

  onStatusSelection(event: StatusSelectionEvent) {
    this.statusSelection.emit(event);
  }

  onStartSideNav(val: string) {
    this.selectedOpen = val;
    if (this.selectedOpen !== 'menu' || this.cards?.length) {
      this.sidenav.toggle();
    }
  }

  // control content width when end drawer is open and close in %

  // PORTION LOGIC SECTION

  // breakpoints
  private isMobile() {
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

  private setPortionState$() {
    return this.isMobile().pipe(
      map((value: boolean[]) => {
        if (value.includes(true)) {
          this._openDrawer = 1;
          this._closedDrawer = 99;
        } else {
          this._openDrawer = this.drawerPortion.open;
          this._closedDrawer = this.drawerPortion.close;
        }
        this.endDrawerSizeSource$.next(this._closedDrawer);
        return {
          drawer: this.drawerPortion.close,
          content: 100 - this.drawerPortion.close,
        };
      })
    );
  }

  // function called each time the left(end) drawer is closed/opened
  emitEndDrawer(): void {
    let portion: number = 0;

    if (!this._endDrawerOpen) {
      portion = 100 - this._openDrawer;
      this.portion$ = of(portion);
      this.endDrawerSizeSource$.next(this._openDrawer);
    } else {
      portion = 100 - this._closedDrawer;
      this.portion$ = of(portion);
      this.endDrawerSizeSource$.next(this._closedDrawer);
    }
    this._endDrawerOpen = !this._endDrawerOpen;
    this.openChanged.emit(this._endDrawerOpen);
  }
}
