import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatusProgressComponent} from './status-progress.component'
import {KKLTypographyModule} from '../typography/typography.module'
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,

    KKLTypographyModule,
    FlexLayoutModule

],
  declarations: [StatusProgressComponent],
  exports: [StatusProgressComponent],
})

export class StatusProgressModule {}
