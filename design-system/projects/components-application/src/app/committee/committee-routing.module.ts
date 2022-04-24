import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitteeLayoutComponent } from './committee-layout/committee-layout.component';
import { CommitteeResultsComponent } from './committee-results/committee-results.component';

const routes: Routes = [
  {
    path: '',
    component : CommitteeResultsComponent
  },
  {
    path: 'new',
    component: CommitteeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./committee-new/committee-new.module').then(
            (m) => m.CommitteeNewModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommitteeRoutingModule {}
