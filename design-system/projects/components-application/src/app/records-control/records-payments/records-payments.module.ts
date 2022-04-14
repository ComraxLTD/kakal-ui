import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsSellerPanelComponent } from './payments-seller-panel/payments-seller-panel.component';

import { RecordsPaymentsRoutingModule } from './records-payments-routing.module';
import { PaymentsLawyerPanelComponent } from './payments-lawyer-panel/payments-lawyer-panel.component';
import { PaymentsLayoutComponent } from './payments-layout/payments-layout.component';
import { PaymentsRevenuePanelComponent } from './payments-revenue-panel/payments-revenue-panel.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, KakalUiModule } from '../../../../../kakal-ui/src/public-api';



@NgModule({
  declarations: [
    PaymentsLayoutComponent,
    PaymentsSellerPanelComponent,
    PaymentsRevenuePanelComponent,
    PaymentsLawyerPanelComponent,
  ],
  imports: [
    CommonModule,
    RecordsPaymentsRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    KakalUiModule,

  ]
})
export class RecordsPaymentsModule { }
