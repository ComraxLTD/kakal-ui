import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BreakpointService, KakalUiModule, KKLFilterCardModule, KKLPageHeadlineModule, KKLStatusBarsModule, RouterService, StepperLayoutModule, StepperLayoutService } from '../../../kakal-ui/src/public-api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../../kakal-ui/src/lib/angular-material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableComponent } from './components/table/table.component';
import { DetailsComponent } from './components/details/details.component';
import { BidComponent } from './components/bid/bid.component';

@NgModule({
  declarations: [AppComponent, TableComponent, DetailsComponent, BidComponent],
  imports: [
    BrowserModule,
    KKLFilterCardModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    KKLPageHeadlineModule,
    KKLStatusBarsModule,
    StepperLayoutModule,
    KakalUiModule,
  ],
  providers: [StepperLayoutService,BreakpointService,RouterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
