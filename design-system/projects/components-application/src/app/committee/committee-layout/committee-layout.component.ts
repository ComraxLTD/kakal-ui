import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { CardStepModel, RouterService, StepperSelectEvent } from '../../../../../kakal-ui/src/public-api';
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
  public steps: CardStepModel[] = [
    {
      label: 'פרטי ועידה',
      svgIcon: 'contact',
      path: 'details',
    },
    {
      label: 'תיקי רמ"י',
      svgIcon: 'portfolio',
      path: 'remi-portfolio',
      hasSteps : true
    },
    {
      label: 'סיכום עסקאות',
      svgIcon: 'survey',
      path: 'transactions',
    },
  ];

  constructor(
    private committeeLayoutService: CommitteeLayoutService,
    private routerService: RouterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showSave$ = of(true);
  }

  // UTILITY METHODS SECTION

  private getUrl(path: string) {
    const routes = this.router.url.split('/');
    routes.unshift();
    routes.pop();
    routes.push(path);
    return routes.join('/');
  }

  // only for v2.79
  private navigate(path: string) {
    const url = this.getUrl(path);
    this.routerService.navigate(url);
  }

  private getLastPath(): string {
    const routes = this.router.url.split('/');
    return routes.pop() as string;
  }

  private navigateFormNext(currentPath: string) {
    const nextIndex =
      this.steps.findIndex((step) => step.path === currentPath) + 1;

    if (this.steps[nextIndex]) {
      const nextPath = this.steps[nextIndex].path;
      this.navigate(nextPath);
    }
  }
  // navigate from stepper
  onStepSelect(event: StepperSelectEvent) {
    this.navigate(event.selectedStep.path);
  }

  // navigate from bottom-navbar - next
  onNext(event: CardStepModel) {
    const currentPath = this.getLastPath();
    const isLastStep = this.committeeLayoutService.isLastStep();
    const isComplete = this.committeeLayoutService.isComplete();
    if (currentPath === 'remi-portfolio') {
      if (!isLastStep) {
        this.committeeLayoutService.next();
      } else if (!isComplete) {
        this.committeeLayoutService.complete();
      } else {
        this.navigateFormNext(currentPath);
      }
    } else {
      this.navigateFormNext(currentPath);
    }
  }

  onNextStep(event : StepperSelectEvent) {
    console.log(event)
  }

  onSave() {
    console.log('save');
  }

  onPrevious(): void {
    const currentPath = this.getLastPath();
    const isStartStep = this.committeeLayoutService.isStartStep();
    const isComplete = this.committeeLayoutService.isComplete();
    if (currentPath === 'remi-portfolio' && !isStartStep && !isComplete) {
      this.committeeLayoutService.previous();
    } else {
      this.routerService.goBack();
    }
  }
}
