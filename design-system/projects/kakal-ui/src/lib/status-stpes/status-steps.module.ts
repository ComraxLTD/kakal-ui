import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatusStepsComponent} from './status-steps.component'
import {KKLTypographyModule} from '../typography/typography.module'
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,

    KKLTypographyModule,
    FlexLayoutModule

],
  declarations: [StatusStepsComponent],
  exports: [StatusStepsComponent],
})

export class KKLStatusStepsModule {}
