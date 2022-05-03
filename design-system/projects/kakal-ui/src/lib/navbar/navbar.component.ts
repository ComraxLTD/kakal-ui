import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CardStatus } from '../cards/card-status/card-status.component';
import { StatusSelectionEvent } from '../groups/status-group/status-group.component';
import { BreakpointService } from '../../services/breakpoint.service';
import { ROOT_PREFIX } from '../../constants/root-prefix';
import { PageHeadline } from '../page-headline/page-headline.component';
import { IconModel } from '../icon/icon.component';
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
  mobile$: Observable<boolean>;

  openLabel: string = 'תפריט';
  closeLabel: string = 'סגור תפריט';

  @Output() statusSelection = new EventEmitter<StatusSelectionEvent>();
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

  onStatusSelection(event : StatusSelectionEvent) {
    this.statusSelection.emit(event)
  }
}
