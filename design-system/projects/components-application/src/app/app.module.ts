import { NgModule } from '@angular/core';
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
import { BidComponent } from './components/bid/bid.component';
import { FormFilterSearchComponent } from './components/form-filter-search/form-filter-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DetailsComponent,
    BidComponent,
    FormFilterSearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    KakalUiModule,
  ],
  providers: [StepperLayoutService, BreakpointService, RouterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
