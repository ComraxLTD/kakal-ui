import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';

import { KKLDirectivesModule } from '../../directives/directives.module';
import { KKLNavbarModule } from '../../navbar/navbar.module';
import { KKLNavbarBottomModule } from '../../navbar-bottom/navbar-bottom.module';
import { KKLMenuBarModule } from '../../menu-bar/menu-bar.module';
import { KKLButtonModule } from '../../button/button.module';
import { KKLIconModule } from '../../icon/icon.module';
import { KKLTypographyModule } from '../../typography/typography.module';

import { DrawerLayoutComponent } from './drawer-layout.component';
@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatBadgeModule,
    FlexLayoutModule,
    KKLDirectivesModule,
    KKLNavbarModule,
    KKLMenuBarModule,
    KKLNavbarBottomModule,
    KKLButtonModule,
    KKLIconModule,
    KKLTypographyModule,
  ],
  declarations: [DrawerLayoutComponent],
  exports: [DrawerLayoutComponent],
})
export class KKLDrawerLayoutModule {}
