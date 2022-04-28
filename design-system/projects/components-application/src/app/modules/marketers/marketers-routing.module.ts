import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketersReportsComponent } from './components/marketers-reports/marketers-reports.component';
import { MarketersTourListComponent } from './components/marketers-tour-list/marketers-tour-list.component';

const routes: Routes = [
  {
    path: 'my-tours',
    component: MarketersTourListComponent,
  },
  {
    path:'',pathMatch:'full',redirectTo:'my-tours'
  },
  {path:'reports',component:MarketersReportsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketersRoutingModule {}
