import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationLayoutComponent } from './registration-layout/registration-layout.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordsRegistrationRoutingModule {}
