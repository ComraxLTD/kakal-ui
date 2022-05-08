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

import { BehaviorSubject, Observable, mergeMap, merge } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';

export interface Portion {
  content: number;
  drawer: number;
  show: boolean;
  opened: boolean;
  mobile: boolean;
  hasButton: boolean;
}

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

  @Input() drawerPortion: { open: number; close: number; hasButton: boolean } =
    {
      open: 0,
      close: 0,
      hasButton: false,
    };

  selectedOpen: string;

  // PORTION LOGIC
  portionSource$: BehaviorSubject<Portion>;
  portion$: Observable<Portion>;
  _endDrawerOpen: boolean;

  showStatus$: Observable<boolean>;
  hideFooter$: Observable<boolean>;

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
    this.showStatus$ = this.handleShow(this.showStatusPath || []);
    this.hideFooter$ = this.handleShow([...this.hideFooterPath, '']);

    this.portion$ = this.setPortionState$();
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

  private setStateFromMobile$(): Observable<Portion> {
    const { close, hasButton } = this.drawerPortion;
    let state: Portion;

    console.log(hasButton);

    return this.isMobile().pipe(
      switchMap((value: boolean[]) => {
        if (value.includes(true)) {
          state = {
            drawer: 0,
            content: 100,
            show: true,
            opened: false,
            mobile: true,
            hasButton,
          };
        } else {
          state = {
            drawer: close,
            content: 100 - close,
            show: true,
            opened: false,
            mobile: false,
            hasButton,
          };
        }

        this.portionSource$ = new BehaviorSubject<Portion>(state);
        return this.portionSource$.asObservable();
      })
    );
  }

  private setPortionState$() {
    const stateFromMobile$ = this.setStateFromMobile$();
    return merge(stateFromMobile$);
  }

  private setDrawerStateOnDesktop(oldState: Portion) {
    const { open, close } = this.drawerPortion;

    // logic when close
    if (!oldState.opened) {
      return {
        ...oldState,
        opened: true,
        drawer: open,
        content: 100 - open,
      };
    } else {
      return {
        ...oldState,
        opened: false,
        drawer: close,
        content: 100 - close,
      };
    }
  }
  private setDrawerStateOnMobile(oldState: Portion) {

    // logic when close
    if (!oldState.opened) {
      return {
        ...oldState,
        opened: true,
        show: true,
        drawer: 100,
        content: 0,
      };
    } else {
      return {
        ...oldState,
        opened: false,
        show: false,
        drawer: 0,
        content: 100,
      };
    }
  }

  // function called each time the left(end) drawer is closed/opened
  emitEndDrawer(): void {
    const { open, close } = this.drawerPortion;
    const oldState = this.portionSource$.getValue();
    let portionState = {} as Portion;

    if (oldState.mobile) {
      portionState = this.setDrawerStateOnMobile(oldState);
    } else {
      portionState = this.setDrawerStateOnDesktop(oldState);
    }

    this.portionSource$.next(portionState);
    this.openChanged.emit(this._endDrawerOpen);
  }
}
