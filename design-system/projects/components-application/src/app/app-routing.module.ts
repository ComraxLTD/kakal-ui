import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './components/lobby/lobby.component';

const routes: Routes = [
  {
    path: 'lobby',
    component: LobbyComponent,
    data: { breadcrumb: 'דף הבית', homepage: true },
    children: [],
  },

  {
    path: 'availability-check',
    loadChildren: () =>
      import('./modules/availabiilty-check/availability-check.module').then(
        (m) => m.AvailabilityCheckModule
      ),
  },
  {
    path: 'reservation',
    loadChildren: () =>
      import('./modules/new-reservation/new-reservation.module').then(
        (m) => m.NewReservationModule
      ),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./modules/marketers/marketers.module').then(
        (m) => m.MarketersModule
      ),
  },
  {
    path: 'tours-list',
    loadChildren: () =>
      import('./modules/tours-list/tours-list.module').then(
        (m) => m.ToursListModule
      ),
  },
  {
    path: '',
    redirectTo: 'lobby',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
