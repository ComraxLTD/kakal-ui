import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {KKLTypographyModule} from '../typography/typography.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import {BreadCrumbesComponent}  from './bread-crumbes.component'
@NgModule({
  imports: [
    CommonModule,
    
    KKLTypographyModule,
    FlexLayoutModule

],
  declarations: [BreadCrumbesComponent],
  exports: [BreadCrumbesComponent],
})

export class KKLBreadCrumbsModule {}
