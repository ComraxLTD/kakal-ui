import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lobby',
    loadChildren: () =>
      import('./root/lands.module').then((m) => m.LandsModule),
  },
  {
    path: 'estates',
    loadChildren: () =>
      import('./committee/committee.module').then((m) => m.CommitteeModule),
  },
  {
    path: '',
    redirectTo: 'lobby',
    pathMatch: 'full',
  },
  // children: [
  //   {
  //     path: '',
  //     loadChildren: () =>
  //       import('./committee/committee.module').then(
  //         (m) => m.CommitteeModule
  //       ),
  //   },
  // ],
  // { path: 'details', component: DetailsComponent },
  // { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
