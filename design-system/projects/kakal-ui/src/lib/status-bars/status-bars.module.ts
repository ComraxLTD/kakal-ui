import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StatusBarsComponent} from './status-bars.component'
import {KKLTypographyModule} from '../typography/typography.module'
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    
    KKLTypographyModule,
    FlexLayoutModule

],
  declarations: [StatusBarsComponent],
  exports: [StatusBarsComponent],
})

export class KKLStatusBarsModule {}
