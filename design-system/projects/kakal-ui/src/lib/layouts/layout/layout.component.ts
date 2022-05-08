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

import { MenuCard } from '../../menu-bar/menu-card/menu-card.component';

import { MatSidenav } from '@angular/material/sidenav';

import { CardStatus } from '../../cards/card-status/card-status.component';
import { ROOT_PREFIX } from '../../../constants/root-prefix';
import { StatusSelectionEvent } from '../../groups/status-group/status-group.component';

import { BehaviorSubject, Observable } from 'rxjs';
import { combineLatestWith, map, switchMap } from 'rxjs/operators';
import { LayoutService, Portion } from './layout.service';

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

  private _portion: Portion = {
    drawer: 0,
    content: 0,
    show: false,
    opened: false,
    mobile: true,
    hasButton: false,
  };

  selectedOpen: string;

  // PORTION LOGIC
  portionSource$: BehaviorSubject<Portion>;
  portion$: Observable<Portion>;

  showStatus$: Observable<boolean>;
  hideFooter$: Observable<boolean>;

  @Output() openChanged: EventEmitter<boolean> = new EventEmitter();
  @Output() logoClicked: EventEmitter<void> = new EventEmitter();
  @Output() menuSelected: EventEmitter<MenuCard> = new EventEmitter();
  @Output() statusSelection: EventEmitter<StatusSelectionEvent> =
    new EventEmitter<StatusSelectionEvent>();

  constructor(
    private layoutService: LayoutService,
    @Inject(ROOT_PREFIX) public rootPrefix: string
  ) {}

  ngOnInit(): void {
    this.portionSource$ = new BehaviorSubject<Portion>(this._portion);

    this.showStatus$ = this.layoutService.handleShow(this.showStatusPath || []);
    this.hideFooter$ = this.layoutService.handleShow([
      ...this.hideFooterPath,
      '',
    ]);

    this.portion$ = this.combineState$();
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

  // PORTION LOGIC SECTION

  private combineState$() {
    const drawerState$ = this.layoutService.listenToDrawerPortion();
    const mobileState$ = this.layoutService.isMobile();

    return mobileState$.pipe(
      combineLatestWith(drawerState$),
      switchMap(([mobile, drawerState]) => {
        const { close, hasButton } = drawerState;
        let state: Portion;

        if (mobile.includes(true)) {
          state = {
            drawer: 100,
            content: 100,
            show: false,
            opened: false,
            mobile: true,
            hasButton
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
        console.log(state)
        this.portionSource$.next(state);
        return this.portionSource$.asObservable();
      })
    );
  }

  private setDrawerStateOnDesktop(oldState: Portion) {
    const { close, open, hasButton } = this.layoutService.getDrawerPortion();

    // logic when close
    if (!oldState.opened) {
      return {
        ...oldState,
        opened: true,
        drawer: open,
        content: 100 - open,
        hasButton,
      };
    } else {
      return {
        ...oldState,
        opened: false,
        drawer: close,
        content: 100 - close,
        hasButton,
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
  onEndDrawerToggle(): void {
    const oldState = this.portionSource$.getValue();
    let portionState = {} as Portion;

    if (oldState.mobile) {
      portionState = this.setDrawerStateOnMobile(oldState);
    } else {
      portionState = this.setDrawerStateOnDesktop(oldState);
    }

    this.portionSource$.next(portionState);
    this.openChanged.emit(portionState.opened);
  }
}
