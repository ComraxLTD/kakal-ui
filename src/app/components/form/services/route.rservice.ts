import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  private $modulePrefix: Subject<string> = new Subject();

  public currentRoute: string;
  public history: string[] = [];

  constructor(private router: Router, private location: Location) {
    this.subscribeToRoute()
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

  public subscribeToRoute(): Observable<string> {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event: any) => {
        this.history.push(event.urlAfterRedirects);
        this.currentRoute = event.utl;
        return event.url;
      })
    );
  }

  public getLastPathObs(): Observable<string> {
    return this.subscribeToRoute().pipe(
      map((path: string) => this.setLastPath(path))
    );
  }

  public async navigate(path: string) {
    try {
      await this.router.navigateByUrl(path);
    } catch (err) {
      console.log(err);
    }
  }

  public setLastPath(url: string) {
    const path = url.split('/');
    return path[path.length - 1];
  }

  public getModulePrefixObs(): Observable<string> {
    return this.$modulePrefix.asObservable();
  }

  public emitModulePrefix(path: string): void {
    this.$modulePrefix.next(path);
  }
}
