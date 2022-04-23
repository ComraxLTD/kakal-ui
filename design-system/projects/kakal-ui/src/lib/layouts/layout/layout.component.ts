import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { RouterService, BreakpointService } from '../../../services/services';
import { PageHeadlineService } from '../../page-headline/page-headline.service';
import { PageHeadline } from '../../page-headline/page-headline.component';
import { MenuItem } from '../../menu-bar/menu-item/menu-item.component';

import { CardStatus } from '../../cards/card-status/card-status.model';
import { map, startWith } from 'rxjs/operators';
import { merge, Observable } from 'rxjs';

@Component({
  selector: 'kkl-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  @Input() items: MenuItem[];
  @Input() status: CardStatus[];
  @Input() pageHeadlineRouteMap: { [ket: string]: string };
  @Input() showStatusPath: string[];

  showStatus$: Observable<boolean>;
  pageHeadline$: Observable<PageHeadline[]>;
  mobile$: Observable<boolean>;

  @Output() logoClicked: EventEmitter<void> = new EventEmitter();

  constructor(
    private routerService: RouterService,
    private pageHeadlineService: PageHeadlineService,
    private breakpointService: BreakpointService,
  ) {}

  ngOnInit(): void {
    this.showStatus$ = this.handleShowState(this.showStatusPath);
    this.pageHeadline$ = this.setPageHeadline();
    this.mobile$ = this.breakpointService.isMobile();

  }

  private setPageHeadline() {
    return merge(
      this.setPageHeadlineFromRoute(),
      this.pageHeadlineService.listenToPageHeadline()
    );
  }

  private setPageHeadlineFromRoute() {
    return this.routerService.listenToRoute$().pipe(
      map((url: string) => url.split('/').reverse()),
      map(
        (url: string[]) =>
          url.find((item) => this.pageHeadlineRouteMap[item]) || ''
      ),
      map((path: string) => this.pageHeadlineRouteMap[path]),
      map((path: string) => {
        const pageHeadline: PageHeadline = { value: path };
        return [pageHeadline];
      })
    );
  }

  private handleShowState(list: string[]) {
    return this.routerService.getLastPath$().pipe(
      startWith(this.routerService.getCurrentPath()),
      map((path: string) => {
        return this.findPath(list, path);
      })
    );
  }

  private findPath(list: any[], value: string): boolean {
    return !!list?.find((path: string) => path == value);
  }

  public onLogoClicked() {
    this.logoClicked.emit();
  }
}
