import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToursListRoutingModule } from './tours-list-routing.module';
import { TourListLayoutComponent } from './components/tour-list-layout/tour-list-layout.component';
import { CoreModule } from '../core/core.module';
import { TourListBookingsComponent } from './components/tour-list-bookings/tour-list-bookings.component';
import { TourListOrdersComponent } from './components/tour-list-orders/tour-list-orders.component';
import { TourListTableComponent } from './components/tour-list-table/tour-list-table.component';
import { TourListBudjetComponent } from './components/tour-list-budjet/tour-list-budjet.component';

@NgModule({
  declarations: [TourListLayoutComponent, TourListBookingsComponent, TourListOrdersComponent, TourListTableComponent, TourListBudjetComponent],
  imports: [CommonModule, ToursListRoutingModule, CoreModule],
})
export class ToursListModule {}
