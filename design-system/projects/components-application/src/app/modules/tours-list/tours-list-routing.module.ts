import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourListBookingsComponent } from './components/tour-list-bookings/tour-list-bookings.component';
import { TourListBudjetComponent } from './components/tour-list-budjet/tour-list-budjet.component';
import { TourListLayoutComponent } from './components/tour-list-layout/tour-list-layout.component';
import { TourListOrdersComponent } from './components/tour-list-orders/tour-list-orders.component';
import { TourListTableComponent } from './components/tour-list-table/tour-list-table.component';

const routes: Routes = [{path:'',component:TourListLayoutComponent,children:[
  {path:'bookings',component:TourListBookingsComponent},
  {path:'orders',component:TourListOrdersComponent},
  {path:'table',component:TourListTableComponent},

]}
,{path:'budjet',component:TourListBudjetComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToursListRoutingModule { }
