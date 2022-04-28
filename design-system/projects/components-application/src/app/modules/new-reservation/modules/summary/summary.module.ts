import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { CoreModule } from '../../../core/core.module';
import { ReservationSummaryComponent } from './components/reservation-summary/reservation-summary.component';


@NgModule({
  declarations: [
    ReservationSummaryComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    CoreModule
  ]
})
export class SummaryModule { }
