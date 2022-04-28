import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationSummaryComponent } from './components/reservation-summary/reservation-summary.component';

const routes: Routes = [{
  path:'',component:ReservationSummaryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryRoutingModule { }
