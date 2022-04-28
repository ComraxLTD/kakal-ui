import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './components/activity/activity.component';
import { EconomyComponent } from './components/economy/economy.component';
import { EverythingComponent } from './components/everything/everything.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { GuidanceComponent } from './components/guidance/guidance.component';

import { LayoutComponent } from './components/layout/layout.component';
import { LodgingComponent } from './components/lodging/lodging.component';
import { MusicalEntertainmentComponent } from './components/musical-entertainment/musical-entertainment.component';
import { SecurityComponent } from './components/security/security.component';
import { SitesComponent } from './components/sites/sites.component';
import { SleepingComponent } from './components/sleeping/sleeping.component';
import { TransportationComponent } from './components/transportation/transportation.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'activity',
        component: ActivityComponent
      },
      {
        path: 'sleeping',
        component: SleepingComponent
      },
      {
        path: 'economy',
        component: EconomyComponent
      },
      {
        path: 'everything',
        component: EverythingComponent
      },
      {
        path: 'facilities',
        component: FacilitiesComponent
      },
      {
        path: 'guidance',
        component: GuidanceComponent
      },
      {
        path: 'lodging',
        component: LodgingComponent
      },
      {
        path: 'musical-entertainment',
        component: MusicalEntertainmentComponent
      },
      {
        path: 'security',
        component: SecurityComponent
      },
      {
        path: 'sites',
        component: SitesComponent
      },
      {
        path: 'transportation',
        component: TransportationComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartsRoutingModule { }
