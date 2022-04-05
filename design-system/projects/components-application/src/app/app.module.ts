import { LOCALE_ID, NgModule } from '@angular/core';
import {
  BreakpointService,
  KakalUiModule,
  RouterService,
  StepperLayoutService,
} from '../../../kakal-ui/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '../../../kakal-ui/src/lib/angular-material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableComponent } from './components/table/table.component';
import { DetailsComponent } from './components/details/details.component';
import { FormFilterSearchComponent } from './components/form-filter-search/form-filter-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewOrderLayoutComponent } from './components/new-order-layout/new-order-layout.component';
import { ButtonComponent } from './components/button/button.component';
import { OrderDetailsBidComponent } from './components/order-details-bid/order-details-bid.component';
import { LayoutComponent } from './layout/layout.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DetailsComponent,
    OrderDetailsBidComponent,
    ButtonComponent,
    NewOrderLayoutComponent,
    FormFilterSearchComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    KakalUiModule,
    ReactiveFormsModule,
  ],
  providers: [StepperLayoutService, BreakpointService, RouterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
