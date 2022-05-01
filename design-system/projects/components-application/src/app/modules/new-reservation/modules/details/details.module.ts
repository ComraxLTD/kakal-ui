import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { CostumerDetailsComponent } from './components/costumer-details/costumer-details.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { ReservationDetailsComponent } from './components/reservation-details/reservation-details.component';
import { CoreModule } from '../../../core/core.module';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    CostumerDetailsComponent,
    PropertiesComponent,
    ReservationDetailsComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    CoreModule
  ]
})
export class DetailsModule { }
