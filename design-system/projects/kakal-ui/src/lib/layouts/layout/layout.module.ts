import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLDirectivesModule } from '../../directives/directives.module';
import { KKLNavbarModule } from '../../navbar/navbar.module';
import { KKLNavbarBottomModule } from '../../navbar-bottom/navbar-bottom.module';
import { KKLMenuBarModule } from '../../menu-bar/menu-bar.module';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    FlexLayoutModule,
    KKLDirectivesModule,
    KKLNavbarModule,
    KKLMenuBarModule,
    KKLNavbarBottomModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class KKLLayoutModule {}
