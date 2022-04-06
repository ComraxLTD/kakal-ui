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

@Component({
  selector: 'kkl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  
  @Input() public openIcon: string = 'tree_gradient_tac';

  @Input() public icons: IconModel[] = [];

  @Input() public show$: Observable<boolean>;

  public title$: Observable<PageHeadlineModel[]>;
  public status$: Observable<CardStepModel[]>;
  public mobile$: Observable<boolean>;
  public toggle$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public isOpen: boolean = false;
  public openLabel: string = 'תפריט';
  public closeLabel: string = 'סגור תפריט';

  @Output() menuToggle = new EventEmitter();
  @Output() logoClicked = new EventEmitter();

  constructor(
    private navbarService: NavbarService,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.title$ = this.navbarService.getHeadersObs();
    this.status$ = this.navbarService.getStatusObs();
    this.mobile$ = this.breakpointService.isMobile();
  }

  public toggleMenu() {
    const toggle = this.toggle$.getValue()
    this.toggle$.next(!toggle);
    // this.menuToggle.emit();
  }

  public onLogoClick() {
    this.logoClicked.emit();
  }
}
