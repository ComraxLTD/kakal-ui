import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsStepsLayoutComponent } from './records-steps-layout/records-steps-layout.component';

import { RecordsControlRoutingModule } from './records-control-routing.module';
import { RecordsResultsComponent } from './records-results/records-results.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MaterialModule,
  KakalUiModule,
  MODULE_PREFIX,
  ROOT_PREFIX,
} from '../../../../kakal-ui/src/public-api';

@NgModule({
  declarations: [RecordsResultsComponent, RecordsStepsLayoutComponent],
  imports: [
    CommonModule,
    RecordsControlRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    KakalUiModule,
  ],
  providers: [
    { provide: ROOT_PREFIX, useValue: 'lands' },
    { provide: MODULE_PREFIX, useValue: 'records' },
  ],
})
export class RecordsControlModule {}
