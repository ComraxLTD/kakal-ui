import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {KKLTypographyModule} from '../typography/typography.module'
import {KKLIconModule} from '../icon/icon.module'
import {PageHeadlineComponent}from './page-headline.component'
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    KKLTypographyModule,
    KKLIconModule
  ],
  declarations: [PageHeadlineComponent],
  exports: [PageHeadlineComponent]
})
export class KKLPageHeadlineModule {
}
