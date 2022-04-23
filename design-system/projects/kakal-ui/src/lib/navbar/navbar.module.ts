import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { KKLBreadCrumbsModule } from '../bread-crumbs/bread-crumbs.module';
import { KKLDirectivesModule } from '../directives/directives.module';
import { KKLIconModule } from '../icon/icon.module';
import { KKLButtonModule } from '../button/button.module';

import { KKLPageHeadlineModule } from '../page-headline/page-headline.module';
import { KKLTypographyModule } from '../typography/typography.module';

import { NavbarComponent } from './navbar.component';
import { KKLStatusGroupModule } from '../groups/status-group/status-group.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    KKLStatusGroupModule,
    KKLTypographyModule,
    KKLIconModule,
    KKLButtonModule,
    KKLDirectivesModule,
    KKLBreadCrumbsModule,
    KKLPageHeadlineModule,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class KKLNavbarModule {}
