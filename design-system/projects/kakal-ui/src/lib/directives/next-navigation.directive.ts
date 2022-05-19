import { Directive, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouterService } from '../../services/services';
import { CardStep } from '../cards/card-step/card-step.component';
import { NavbarBottomService } from '../navbar-bottom/navbar-bottom.service';
import { filter } from 'rxjs';
import { map, Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[kklNextNavigation]',
})
export class NextNavigationDirective {
  @Input() steps!: CardStep[];

  destroy$: Subject<void> = new Subject();

  constructor(
    private footerService: NavbarBottomService,
    private routerService: RouterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.onNext().pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  onNext() {
    return this.footerService.listenToNext().pipe(
      map((_) => {
        return this.routerService.getCurrentPath();
      }),
      map((currentPath: string) => {
        return this.steps.findIndex((step) => step.path === currentPath);
      }),
      filter((index: number) => index !== this.steps.length - 1),
      map((selectedIndex: number) => {
        const currentPath = this.routerService.getCurrentPath();
        const nextIndex = ++selectedIndex;
        const nextPath = this.steps[nextIndex].path;

        const url = this.router.url.replace(currentPath, nextPath);
        this.router.navigateByUrl(url);
      })
    );
  }
}
