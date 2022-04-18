import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, startWith , tap } from 'rxjs/operators';
import { CardStepModel } from '../public-api';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  private modulePrefix$: BehaviorSubject<string> = new BehaviorSubject(
    'small-contract'
  );
  public currentPath$: BehaviorSubject<string> = new BehaviorSubject('');

  public currentRoute: string;
  public history: string[] = [];

  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {
    this.listenToRoute();
  }

  public goBack() {
    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }

  public getCurrentPath(): string {
    return this.setLastPath(this.router.url);
  }

  public listenToRoute(): Observable<string> {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event: any) => {
        this.history.push(event.urlAfterRedirects);
        this.currentRoute = (event as NavigationEnd).url;
        return event.url;
      })
    );
  }

  public getLastPathObs(steps?: CardStepModel[]): Observable<string> {
    return this.listenToRoute().pipe(
      startWith(this.getCurrentPath()),
      map((path: string) => steps ? this.setLastPathWithSteps(this.router.url, steps) : this.setLastPath(path))
    );
  }

  public async navigate(path: string) {
    try {
       await this.router.navigateByUrl(path);
    } catch (err) {
      console.log(err);
    }
  }
  public setLastPathWithSteps(path: string, steps: CardStepModel[]):string {
    let currentStep:CardStepModel;
    const pathArr = path.split('/');
    pathArr.filter((path) =>  {
      return steps.map(step => {
        if (step.path === path) currentStep = step;
      })
    });
    return currentStep?.path;
  }

  public setLastPath(url: string) {
    const path = url.split('/');
    return path[1];
  }

  public getModulePrefixObs(): Observable<string> {
    return this.modulePrefix$.asObservable();
  }

  public emitModulePrefix(path: string): void {
    this.modulePrefix$.next(path);
  }

  public getParams$(): Observable<Params> {
    return this.activatedRoute.params;
  }
}
