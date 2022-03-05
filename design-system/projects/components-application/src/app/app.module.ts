import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KakalUiModule } from '../../../kakal-ui/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../../kakal-ui/src/lib/angular-material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableComponent } from './components/table/table.component';
import { StrokedButtonDirective } from './stroked-button';

@NgModule({
  declarations: [AppComponent, TableComponent ,StrokedButtonDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    KakalUiModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
