import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitteeTransactionsComponent } from './committee-transactions.component';

const routes: Routes = [
  {
    path: '',
    component: CommitteeTransactionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommitteeTransactionsRoutingModule {}
