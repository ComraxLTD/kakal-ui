import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { CardStep } from '../lib/cards/card-step/card-step.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, startWith, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  private modulePrefix$: BehaviorSubject<string> = new BehaviorSubject(
    'small-contract'
  );
  history: string[] = [];

  url: string;

  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {
    // this.listenToRoute$();
  }

  getUrl(path: string): string {
    const routes = this.router.url.split('/');
    routes.unshift();
    routes.pop();
    routes.push(path);
    return routes.join('/');
  }

  getUrlFromBase(path: string, base: string): string {
    const routes = this.router.url.split('/');
    routes.unshift();

    let location = routes.length - 1;
    while (location !== -1) {
      if (routes[location] === base) {
        routes.push(path);
        return routes.join('/');
      } else {
        routes.pop();
      }
      location--;
    }
  }

  getParentPath(): string {
    const routes = this.router.url.split('/');
    routes.unshift();
    routes.pop();
    return routes.pop();
  }

  goBack(): void {
    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/');
    }
  }

  getCurrentPath(): string {
    return this.setLastPath(this.router.url);
  }

  listenToRoute$(): Observable<string> {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        this.history.push(event.urlAfterRedirects);
        this.url = event.url;
        // this.currentRoute = (event as NavigationEnd).url;
        return event.url;
      })
    );
  }

  getLastPath$(steps?: CardStep[]): Observable<string> {
    return this.listenToRoute$().pipe(
      startWith(this.getCurrentPath()),
      map((path: string) =>
        steps
          ? this.setLastPathWithSteps(this.router.url, steps)
          : this.setLastPath(path)
      )
    );
  }

  getUrlAsMap(url: string): { [key: string]: string } {
    return url.split('/').reduce((acc, key) => {
      if (!key) {
        return acc;
      }

      return {
        ...acc,
        [key]: key,
      };
    }, {});
  }

  async navigate(path: string): Promise<void> {
    try {
      await this.router.navigateByUrl(path);
    } catch (err) {
      console.log(err);
    }
  }

  setLastPathWithSteps(path: string, steps: CardStep[]): string {
    let currentStep: CardStep;
    const pathArr = path.split('/');
    pathArr.filter((path) => {
      return steps.map((step) => {
        if (step.path === path) currentStep = step;
      });
    });
    return currentStep?.path;
  }

  setLastPath(url: string) : string{
    const path = url.split('/');
    return path[path.length - 1];
  }

  getModulePrefixObs(): Observable<string> {
    return this.modulePrefix$.asObservable();
  }

  emitModulePrefix(path: string): void {
    this.modulePrefix$.next(path);
  }

  getParams$(): Observable<Params> {
    return this.activatedRoute.params;
  }
}
