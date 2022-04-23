import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import {
  ButtonModel,
  CardStep,
  FormActions,
  RouterService,
  StepsSelectionEvent,
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
  steps: CardStepModel[] = [
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
    private committeeLayoutService: CommitteeLayoutService,
    private routerService: RouterService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSave() {
    console.log('save');
  }

}
