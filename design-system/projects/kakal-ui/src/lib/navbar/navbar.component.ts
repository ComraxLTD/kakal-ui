import { IconModel } from '../icon/icon.model';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { BreakpointService } from '../../services/breakpoint.service';
import { ROOT_PREFIX } from '../../constants/root-prefix';
import { PageHeadline } from '../page-headline/page-headline.component';
import { CardStatusModel } from '../../public-api';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'kkl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() icons: IconModel[] = [];
  @Input() isOpen: boolean = false;
  @Input() status: CardStatusModel[];
  @Input() showStatus$: Observable<boolean>;
  @Input() pageHeadline$: Observable<PageHeadline[]>;

  openIcon: string = 'tree_gradient_';
  mobile$: Observable<boolean>;
  toggle$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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

  public toggleMenu() {
    this.menuToggle.emit();
  }

  public onLogoClick() {
    this.logoClicked.emit();
  }
}
