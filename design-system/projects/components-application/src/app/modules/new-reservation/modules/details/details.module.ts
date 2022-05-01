import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { CostumerDetailsComponent } from './components/costumer-details/costumer-details.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { ReservationDetailsComponent } from './components/reservation-details/reservation-details.component';
import { CoreModule } from '../../../core/core.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

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
    CoreModule,MatCheckboxModule,MatInputModule
  ]
})
export class DetailsModule { }
