import { Component, Input, OnInit } from '@angular/core';

import { BreakpointService } from '../../../services/services';

import { ButtonModel } from '../../button/models/button.types';
import { DrawerLayoutService } from './drawer-layout.service';
import { map, merge, Observable, of } from 'rxjs';
import { DrawerDocumentComponent } from '../../drawers/drawer-document/drawer-document.component';

@Component({
  selector: 'kkl-drawer-layout',
  templateUrl: './drawer-layout.component.html',
  styleUrls: ['./drawer-layout.component.scss'],
})
export class DrawerLayoutComponent implements OnInit {
  selectedOpen: string;

  @Input() drawerAction: ButtonModel;

  mobile$: Observable<boolean>;
  showStartDrawer$: Observable<boolean>;

  constructor(
    private breakpointService: BreakpointService,
    private drawerLayoutService: DrawerLayoutService
  ) {}

  ngOnInit(): void {
    this.mobile$ = this.breakpointService.isMobile();
    this.showStartDrawer$ = merge(
      of(!this.drawerAction),
      this.drawerLayoutService.listenToStartDrawer()
    );
  }
}
