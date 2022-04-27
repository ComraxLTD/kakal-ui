import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandsLobbyComponent } from './lobby/lobby.component';

const routes: Routes = [
  {
    path: '',
    component: LandsLobbyComponent,
  },
  // {
  //   path: 'estates',
  //   loadChildren: () =>
  //     import('../modules/estates/estates.module').then((m) => m.EstatesModule),
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandsRoutingModule {}
