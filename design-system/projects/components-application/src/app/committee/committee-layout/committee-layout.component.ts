import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import {
  ButtonModel,
  CardStep,
  FormActions,
  NavbarBottomService,
  RouterService,
} from '../../../../../kakal-ui/src/public-api';
import { CommitteeLayoutService } from './committee-layout.service';

@Component({
  selector: 'app-committee-layout',
  templateUrl: './committee-layout.component.html',
  styleUrls: ['./committee-layout.component.scss'],
})
export class CommitteeLayoutComponent implements OnInit {
  disableNext!: Observable<boolean>;
  showSave$!: Observable<boolean>;

  //stepper steps
  steps: CardStep[] = [
    {
      label: 'פרטי ועידה',
      svgIcon: 'contact',
      path: 'details',
    },
    {
      label: 'תיקי רמ"י',
      svgIcon: 'portfolio',
      path: 'remi-portfolio',
      hasSteps: true,
    },
    {
      label: 'סיכום עסקאות',
      svgIcon: 'survey',
      path: 'transactions',
    },
  ];

  actions: ButtonModel[] = [{ type: 'form', action: FormActions.EDIT }];

  constructor(
    private navbarBottomService: NavbarBottomService
  ) {}

  ngOnInit(): void {
    this.navbarBottomService.setShowNext(true)
    this.navbarBottomService.setShowSave(true)
  }

  onSave() {
    console.log('save');
  }

}
