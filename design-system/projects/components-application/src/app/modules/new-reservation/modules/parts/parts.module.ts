import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartsRoutingModule } from './parts-routing.module';
import { CoreModule } from '../../../core/core.module';
import { LayoutComponent } from './components/layout/layout.component';
import { EconomyComponent } from './components/economy/economy.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { SitesComponent } from './components/sites/sites.component';
import { GuidanceComponent } from './components/guidance/guidance.component';
import { SecurityComponent } from './components/security/security.component';
import { TransportationComponent } from './components/transportation/transportation.component';
import { LodgingComponent } from './components/lodging/lodging.component';
import { MusicalEntertainmentComponent } from './components/musical-entertainment/musical-entertainment.component';
import { ActivityComponent } from './components/activity/activity.component';
import { EverythingComponent } from './components/everything/everything.component';
import { AddActivityComponent } from './components/add-activity/add-activity.component';
import { SleepingComponent } from './components/sleeping/sleeping.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutComponent,
    EconomyComponent,
    FacilitiesComponent,
    SitesComponent,
    GuidanceComponent,
    MusicalEntertainmentComponent,
    SecurityComponent,
    TransportationComponent,
    LodgingComponent,
    MusicalEntertainmentComponent,
    ActivityComponent,
    EverythingComponent,
    AddActivityComponent,
    SleepingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PartsRoutingModule,
    CoreModule
  ]
})
export class PartsModule { }
