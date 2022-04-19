import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitteeRoutingModule } from './committee-routing.module';
import { CommitteeLayoutComponent } from './committee-layout/committee-layout.component';
import { CommitteeResultsComponent } from './committee-results/committee-results.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, KakalUiModule } from '../../../../kakal-ui/src/public-api';


@NgModule({
  declarations: [
    CommitteeLayoutComponent,
    CommitteeResultsComponent,
  ],
  imports: [
    CommonModule,
    CommitteeRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    KakalUiModule,
  ]
})
export class CommitteeModule { }
