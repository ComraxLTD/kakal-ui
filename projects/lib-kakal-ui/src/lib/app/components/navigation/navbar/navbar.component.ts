import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CardStepModel } from '../../cards/card-step/card-step.model';
import { IconModel } from '../../icon/icon.model';
import { StepModel } from '../../step/step.model';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {


  @Input() public openIcon: string;
  @Input() public logos: IconModel[];

  public title$: Observable<string>;
  public status$: Observable<CardStepModel[]>;
  public showStatus$: Observable<boolean>;

  public isOpen: boolean = false;
  public openLabel: string = 'תפריט';
  public closeLabel: string = 'סגור תפריט';

  @Output() menuToggle = new EventEmitter();

  constructor(private navbarService : NavbarService) {

  }

  ngOnInit(): void {
    this.title$ = this.navbarService.getTitleObs()
    this.status$ = this.navbarService.getStatusObs();
   this.showStatus$ = this.navbarService.getShowStatusObs()

  }

  public toggleMenu() {
    this.isOpen = !this.isOpen;
    this.menuToggle.emit();
  }
}
