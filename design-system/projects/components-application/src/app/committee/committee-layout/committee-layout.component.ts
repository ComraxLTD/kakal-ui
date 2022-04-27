import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import {
  ButtonModel,
  CardStep,
  FormActions,
  NavbarBottomService,
  RouterService,
  StepsLayoutService,
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
    private navbarBottomService: NavbarBottomService,
    private stepsLayoutService: StepsLayoutService,
    private routerService: RouterService,
    private router  : Router
  ) {}

  ngOnInit(): void {
    this.navbarBottomService.setShowNext(true);
    this.navbarBottomService.setShowSave(true);

    this.navbarBottomService.getNext().subscribe(() => {
      const event = this.stepsLayoutService.getStepperSelectEvent();
      console.log(event);
    });
  }

  private getUrl(path: string) {
    const routes = this.router.url.split('/');
    routes.unshift();
    routes.pop();
    routes.push(path);
    return routes.join('/');
  }

  // NAVIGATION EVENTS SECTION
  private navigate(path: string) {
    const url = this.getUrl(path);
    this.routerService.navigate(url);
  }

  // navigate from stepper
  onStepSelect(event: StepsSelectionEvent) {
    this.navigate(event.selectedStep.path);
  }

  onSave() {
    console.log('save');
  }
}
