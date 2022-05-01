import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full'
      },
      {
        path: 'details',
        loadChildren: () => import('./modules/details/details.module').then((m) => m.DetailsModule)
      },
      {
        path: 'parts',
        loadChildren: () => import('./modules/parts/parts.module').then((m) => m.PartsModule)
      },
      {
        path: 'summary',
        loadChildren: () => import('./modules/summary/summary.module').then((m) => m.SummaryModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewReservationRoutingModule { }
