import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLDirectivesModule } from '../../directives/directives.module';
import { KKLCardStatusModule } from '../../cards/card-status/card-status.module';

import { StatusGroupComponent } from './status-group.component';

@NgModule({
  declarations: [
    StatusGroupComponent
  ],
  imports: [
    CommonModule,
    KKLDirectivesModule,
    FlexLayoutModule,
    KKLCardStatusModule
  ],
  exports: [StatusGroupComponent]
})
export class KKLStatusGroupModule { }
