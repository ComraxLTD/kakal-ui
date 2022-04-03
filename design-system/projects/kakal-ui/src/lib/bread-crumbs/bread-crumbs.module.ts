import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KKLTypographyModule } from '../typography/typography.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadCrumbsComponent } from './bread-crumbs.component';
import { RouterModule } from '@angular/router';
import { KKLDirectivesModule } from '../directives/directives.module';
@NgModule({
  imports: [CommonModule, KKLTypographyModule, FlexLayoutModule,RouterModule,KKLDirectivesModule],
  declarations: [BreadCrumbsComponent],
  exports: [BreadCrumbsComponent],
})
export class KKLBreadCrumbsModule {}
