import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { KKLBreadCrumbsModule } from '../bread-crumbs/bread-crumbs.module';
import { KKLDirectivesModule } from '../directives/directives.module';
import { KKLIconModule } from '../icon/icon.module';
import { KKLTypographyModule } from '../typography/typography.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    KKLIconModule,
    KKLTypographyModule,
    KKLDirectivesModule,
    KKLBreadCrumbsModule,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class KKLNavbarModule {}
