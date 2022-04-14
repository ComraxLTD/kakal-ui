import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationLayoutComponent } from './registration-layout/registration-layout.component';
import { RecordsRegistrationRoutingModule } from './records-registration-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MaterialModule,
  KakalUiModule,
} from '../../../../../kakal-ui/src/public-api';

@NgModule({
  declarations: [RegistrationLayoutComponent],
  imports: [
    CommonModule,
    RecordsRegistrationRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    KakalUiModule,
  ],
})
export class RecordsRegistrationModule {}
