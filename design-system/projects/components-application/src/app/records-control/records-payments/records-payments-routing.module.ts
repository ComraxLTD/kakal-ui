import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsLayoutComponent } from './payments-layout/payments-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentsLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordsPaymentsRoutingModule {}
