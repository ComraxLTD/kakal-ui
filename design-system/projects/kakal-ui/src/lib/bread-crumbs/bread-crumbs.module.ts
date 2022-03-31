import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KKLTypographyModule } from '../typography/typography.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadCrumbsComponent } from './bread-crumbs.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [CommonModule, KKLTypographyModule, FlexLayoutModule,RouterModule],
  declarations: [BreadCrumbsComponent],
  exports: [BreadCrumbsComponent],
})
export class KKLBreadCrumbsModule {}
