import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitteeTransactionsRoutingModule } from './committee-transactions-routing.module';
import { CommitteeTransactionsComponent } from './committee-transactions.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MaterialModule,
  KakalUiModule,
} from '../../../../../../kakal-ui/src/public-api';

@NgModule({
  declarations: [CommitteeTransactionsComponent],
  imports: [
    CommonModule,
    CommitteeTransactionsRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    KakalUiModule,
  ],
})
export class CommitteeTransactionsModule {}
