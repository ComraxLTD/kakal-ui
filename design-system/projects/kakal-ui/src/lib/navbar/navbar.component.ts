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
import { ROOT_PREFIX } from '../../constants/root-prefix';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageHeadline } from '../page-headline/page-headline.component';

@Component({
  selector: 'kkl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  @Input() icons: IconModel[] = [];
  @Input() isOpen: boolean = false;
  @Input() showStatus$: Observable<boolean>;
  @Input() pageHeadline$: Observable<PageHeadline[]>;

  openIcon: string = 'tree_gradient_';
  status$: Observable<CardStepModel[]>;
  mobile$: Observable<boolean>;
  toggle$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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
    // this.title$ = this.navbarService.getHeadersObs();
    this.status$ = this.navbarService.getStatusObs();
    this.mobile$ = this.breakpointService.isMobile();
    this.openIcon = this.setMenuIcon();
  }

  private setMenuIcon() {
    return this.openIcon + this.rootPrefix;
  }

  public toggleMenu() {
    this.menuToggle.emit();
  }

  public onLogoClick() {
    this.logoClicked.emit();
  }
}
