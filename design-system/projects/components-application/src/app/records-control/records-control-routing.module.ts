import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordsResultsComponent } from './records-results/records-results.component';
import { RecordsStepsLayoutComponent } from './records-steps-layout/records-steps-layout.component';

const routes: Routes = [
  {
    path: 'results',
    component: RecordsResultsComponent,
  },
  {
    path: 'details',
    component: RecordsStepsLayoutComponent,

    children: [
      {
        path: 'case',
        loadChildren: () =>
          import('./records-case-details/records-case-details.module').then(
            (m) => m.RecordsCaseDetailsModule
          ),
      },
      {
        path: 'payments',
        loadChildren: () =>
          import('./records-payments/records-payments.module').then(
            (m) => m.RecordsPaymentsModule
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./records-registration/records-registration.module').then(
            (m) => m.RecordsRegistrationModule
          ),
      },
    ],
  },
  { path: '', redirectTo: 'results', pathMatch: 'exact' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordsControlRoutingModule {}
