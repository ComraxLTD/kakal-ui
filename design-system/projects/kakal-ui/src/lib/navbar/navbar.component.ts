import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CardStep } from '../cards/card-step/card-step.component';
import { CardStatus } from '../cards/card-status/card-status.component';
import { BreakpointService } from '../../services/breakpoint.service';
import { ROOT_PREFIX } from '../../constants/root-prefix';
import { IconModel } from '../icon/icon.component';
import { PageHeadline } from '../page-headline/page-headline.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'kkl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() icons: IconModel[] = [];
  @Input() isOpen: boolean = false;
  @Input() status: CardStatus[];
  @Input() showStatus$: Observable<boolean>;
  @Input() pageHeadline$: Observable<PageHeadline>;

  openIcon: string = 'tree_gradient_';
  status$: Observable<CardStep[]>;
  mobile$: Observable<boolean>;

  openLabel: string = 'תפריט';
  closeLabel: string = 'סגור תפריט';

  @Output() menuToggle = new EventEmitter();
  @Output() logoClicked = new EventEmitter();

  constructor(
    private breakpointService: BreakpointService,
    @Inject(ROOT_PREFIX) private rootPrefix
  ) {}

  ngOnInit(): void {
    this.mobile$ = this.breakpointService.isMobile();
    this.openIcon = this.setMenuIcon();
  }

  private setMenuIcon() {
    return this.openIcon + this.rootPrefix;
  }

  toggleMenu() {
    this.menuToggle.emit();
  }

  onLogoClick() {
    this.logoClicked.emit();
  }
}
