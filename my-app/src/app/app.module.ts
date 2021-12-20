import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KakalUiModule } from '@ComraxLTD/kakal-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KakalUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
