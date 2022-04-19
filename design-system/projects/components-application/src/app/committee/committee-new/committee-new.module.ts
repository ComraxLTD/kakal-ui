import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitteeNewRoutingModule } from './committee-new-routing.module';
import { CommitteeDetailsComponent } from './committee-details/committee-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, KakalUiModule } from '../../../../../kakal-ui/src/public-api';


@NgModule({
  declarations: [
    CommitteeDetailsComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    KakalUiModule,
    CommitteeNewRoutingModule
  ]
})
export class CommitteeNewModule { }
