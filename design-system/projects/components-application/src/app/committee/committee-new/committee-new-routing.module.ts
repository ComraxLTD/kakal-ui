import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitteeDetailsComponent } from './committee-details/committee-details.component';

const routes: Routes = [
  {
    path: 'details',
    component: CommitteeDetailsComponent,
  },
  {
    path: 'remi-portfolio',
    loadChildren: () =>
      import('./rami-portfolio/rami-portfolio.module').then((m) => m.RamiPortfolioModule),
  },
  {
    path: 'transactions',
    loadChildren: () =>
    import('./committee-transactions/committee-transactions.module').then((m) => m.CommitteeTransactionsModule),
},
  {
    path: '',
    redirectTo: 'details',
    pathMatch: 'exact',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommitteeNewRoutingModule {}
