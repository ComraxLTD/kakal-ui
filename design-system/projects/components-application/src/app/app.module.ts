import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KakalUiModule, KKLPageHeadlineModule, KKLStatusBarsModule } from '../../../kakal-ui/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../../kakal-ui/src/lib/angular-material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableComponent } from './components/table/table.component';
import { StrokedButtonDirective } from './stroked-button';
import { PageHeadlineExampleComponent } from '../../../kakal-ui/src/lib/examples/page-headline-example/page-headline-example.component';

@NgModule({
  declarations: [AppComponent, TableComponent ,StrokedButtonDirective,PageHeadlineExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    KakalUiModule,
    BrowserAnimationsModule,
    KKLPageHeadlineModule,
    KKLStatusBarsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
