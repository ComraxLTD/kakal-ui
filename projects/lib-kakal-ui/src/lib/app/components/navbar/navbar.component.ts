import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CardStepModel } from '../cards/card-step/card-step.model';
import { IconModel } from '../icon/icon.model';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'kkl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {


  @Input() public openIcon: string;
  @Input() public statusStepWidth: number;
  @Input() public logos: IconModel[];
  @Input() public show$: Observable<boolean>;

  public title$: Observable<string>;
  public status$: Observable<CardStepModel[]>;

  public isOpen: boolean = false;
  public openLabel: string = 'תפריט';
  public closeLabel: string = 'סגור תפריט';

  @Output() menuToggle = new EventEmitter();

  constructor(private navbarService : NavbarService) {

  }

  ngOnInit(): void {
    this.title$ = this.navbarService.getHeadersObs()
    this.status$ = this.navbarService.getStatusObs();
  }

    public toggleMenu() {
    this.isOpen = !this.isOpen;
    this.menuToggle.emit();
  }
}
