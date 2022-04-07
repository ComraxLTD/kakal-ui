import { IconModel } from '../icon/icon.model';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CardStepModel } from '../cards/card-step/card-step.model';
import { NavbarService } from './navbar.service';
import { BreakpointService } from '../../services/breakpoint.service';
import { ListItem } from '../list-item/list-item.model';
import { PageHeadlineModel } from '../page-headline/page-headline.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ROOT_PREFIX } from '../../public-api';

@Component({
  selector: 'kkl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() public icons: IconModel[] = [];

  @Input() public show$: Observable<boolean>;

  openIcon: string = 'tree_gradient_';
  title$: Observable<PageHeadlineModel[]>;
  status$: Observable<CardStepModel[]>;
  mobile$: Observable<boolean>;
  toggle$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isOpen: boolean = false;
  openLabel: string = 'תפריט';
  closeLabel: string = 'סגור תפריט';

  @Output() menuToggle = new EventEmitter();
  @Output() logoClicked = new EventEmitter();

  constructor(
    private navbarService: NavbarService,
    private breakpointService: BreakpointService,
    @Inject(ROOT_PREFIX) private rootPrefix
  ) {}

  ngOnInit(): void {
    this.title$ = this.navbarService.getHeadersObs();
    this.status$ = this.navbarService.getStatusObs();
    this.mobile$ = this.breakpointService.isMobile();
    this.openIcon = this.setMenuIcon()
  }

  private setMenuIcon() {
    return this.openIcon + this.rootPrefix;
  }

  public toggleMenu() {
    const toggle = this.toggle$.getValue();
    this.toggle$.next(!toggle);
    this.menuToggle.emit();
  }

  public onLogoClick() {
    this.logoClicked.emit();
  }
}
