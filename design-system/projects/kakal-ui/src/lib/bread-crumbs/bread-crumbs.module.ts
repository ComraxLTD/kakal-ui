import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KKLTypographyModule } from '../typography/typography.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadCrumbsComponent } from './bread-crumbs.component';
@NgModule({
  imports: [CommonModule, KKLTypographyModule, FlexLayoutModule],
  declarations: [BreadCrumbsComponent],
  exports: [BreadCrumbsComponent],
})
export class KKLBreadCrumbsModule {}
