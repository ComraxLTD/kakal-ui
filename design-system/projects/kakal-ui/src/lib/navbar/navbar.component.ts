import { IconModel } from '../icon/icon.model';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CardStep } from '../cards/card-step/card-step.component';
import { NavbarService } from './navbar.service';
import { BreakpointService } from '../../services/breakpoint.service';
import { ROOT_PREFIX } from '../../constants/root-prefix';
import { Observable } from 'rxjs';

@Component({
  selector: 'kkl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  @Input() icons: IconModel[] = [];
  @Input() isOpen: boolean = false;
  @Input() showStatus$: Observable<boolean>;

  openIcon: string = 'tree_gradient_';
  status$: Observable<CardStep[]>;
  mobile$: Observable<boolean>;

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
    this.status$ = this.navbarService.getStatusObs();
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
