import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KakalUiModule } from '@ComraxLTD/kakal-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AutocompleteExComponent } from './autocomplete-ex/autocomplete-ex.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormService } from '@ComraxLTD/kakal-ui/lib/form/services/form.service';

@NgModule({
  declarations: [AppComponent, AutocompleteExComponent],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    KakalUiModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
