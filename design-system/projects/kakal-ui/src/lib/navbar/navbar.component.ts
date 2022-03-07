import { IconModel } from '../icon/icon.model';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CardStepModel } from '../cards/card-step/card-step.model';
import { NavbarService } from './navbar.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { BreakpointService } from '../../services/breakpoint.service';
import { ListItem } from '../list-item/list-item.model';

@Component({
  selector: 'kkl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() public openIcon: string;
  @Input() public logos: IconModel[];
  @Input() public show$: Observable<boolean>;

  public title$: Observable<string>;
  public status$: Observable<CardStepModel[]>;
  public mobile$: Observable<boolean>;
  public toggle$: BehaviorSubject<ListItem<boolean>> = new BehaviorSubject<
    ListItem<boolean>
  >({ value: true });

  public isOpen: boolean = false;
  public openLabel: string = 'תפריט';
  public closeLabel: string = 'סגור תפריט';

  @Output() menuToggle = new EventEmitter();

  constructor(
    private navbarService: NavbarService,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.title$ = this.navbarService.getHeadersObs();
    this.status$ = this.navbarService.getStatusObs();
    this.mobile$ = this.breakpointService.isMobile();
  }

  public toggleMenu(toggle: boolean) {
    this.toggle$.next({ value: !toggle });
    this.menuToggle.emit();
  }

  public onNavigate() {
  }
}