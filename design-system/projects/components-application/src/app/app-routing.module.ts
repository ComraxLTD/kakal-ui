import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./records-control/records-control.module').then(
  //       (m) => m.RecordsControlModule
  //     ),
  // },

  // { path: 'details', component: DetailsComponent },
  // { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
