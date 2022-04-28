import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketersRoutingModule } from './marketers-routing.module';
import { MarketersTourListComponent } from './components/marketers-tour-list/marketers-tour-list.component';
import { CoreModule } from '../core/core.module';
import { MarketersProvidersComponent } from './components/marketers-tour-list/marketers-providers/marketers-providers.component';
import { MarketersChargedComponent } from './components/marketers-tour-list/marketers-charged/marketers-charged.component';
import { MarketersLastTransactionsComponent } from './components/marketers-tour-list/marketers-last-transactions/marketers-last-transactions.component';
import { MarketersProvidersTemplateComponent } from './components/marketers-tour-list/marketers-providers/marketers-providers-template/marketers-providers-template.component';
import { MarketersReportsComponent } from './components/marketers-reports/marketers-reports.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    MarketersTourListComponent,
    MarketersProvidersComponent,
    MarketersChargedComponent,
    MarketersLastTransactionsComponent,
    MarketersProvidersTemplateComponent,
    MarketersReportsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MarketersRoutingModule,
    MatTabsModule
  ]
})
export class MarketersModule { }
