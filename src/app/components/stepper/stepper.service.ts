import { ListItemKeys } from '../menu/list-item.model';
import { Observable, Subject } from 'rxjs';
import { RouterService } from 'src/app/utilities/services/route.rservice';
import { Injectable } from '@angular/core';
import { StepModel } from '../step/step.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  constructor(private routerService: RouterService) {}

  private setActiveStep(items: StepModel[], key: ListItemKeys, value: any) {
    items.find((item) => {
      if (item[key] === value) {
        item.active();
      }
    });
  }

  private unactiveStep(items: StepModel[]) {
    items.find((item) => {
      if (item.isActive) {
        item.unactive();
      }
    });
  }
  public setStepsStatus(
    items: StepModel[],
    key: ListItemKeys,
    value: string
  ): StepModel[] {
    this.unactiveStep(items);
    this.setActiveStep(items, key, value);
    return [...items];
  }

  public setSteps(steps: StepModel[], key: ListItemKeys): StepModel[] {
    const path = this.routerService.getCurrentPath();
    return this.setStepsStatus(steps, key, path);
  }

  public updateSteps(
    steps: StepModel[],
    key: ListItemKeys,
    value
  ): StepModel[] {
    return this.setStepsStatus(steps, key, value);
  }

  // ROUTER LOGIC SECTION
  public getModulePrefixObs(): Observable<string> {
    return this.routerService.getModulePrefixObs();
  }

  public emitModulePrefix(prefix: string): void {
    this.routerService.emitModulePrefix(prefix);
  }

  public getLastPathObs(): Observable<string> {
    return this.routerService.getLastPathObs();
  }
  public getCurrentPath(): string {
    return this.routerService.getCurrentPath();
  }

  public navigate(path: string) {
    this.routerService.navigate(path);
  }
}
