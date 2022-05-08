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
import { LayoutService } from './layout.service';

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
    private layoutService: LayoutService,
    @Inject(ROOT_PREFIX) public rootPrefix: string
  ) {}

  ngOnInit(): void {
    this.showStatus$ = this.layoutService.handleShow(this.showStatusPath || []);
    this.hideFooter$ = this.layoutService.handleShow([
      ...this.hideFooterPath,
      '',
    ]);

    this.portion$ = this.initState$();
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

  private initState$(): Observable<Portion> {
    const { close, hasButton } = this.drawerPortion;
    let state: Portion;

    return this.layoutService.isMobile().pipe(
      switchMap((value: boolean[]) => {
        if (value.includes(true)) {
          state = {
            drawer: 100,
            content: 100,
            show: false,
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
