import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewReservationRoutingModule } from './new-reservation-routing.module';

import { LayoutComponent } from './components/layout/layout.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    NewReservationRoutingModule,
    CoreModule
  ]
})
export class NewReservationModule { }
