import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { RouterService, BreakpointService } from '../../../services/services';
import { MenuCard } from '../../menu-bar/menu-card/menu-card.component';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'kkl-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @Input() showStatusPath: string[];
  @Input() cards: MenuCard[];
  @Input() rootPrefix: string;

  public currentPath$: Observable<string>;
  public show$: Observable<boolean>;
  public mobile$: Observable<boolean>;

  @Output() logoClicked: EventEmitter<void> = new EventEmitter();

  constructor(
    private routerService: RouterService,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.currentPath$ = this.routerService.getLastPathObs();
    this.show$ = this.handleShowState(this.showStatusPath);
    this.mobile$ = this.breakpointService.isMobile();
  }

  private handleShowState(list: string[]) {
    return this.currentPath$.pipe(
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
