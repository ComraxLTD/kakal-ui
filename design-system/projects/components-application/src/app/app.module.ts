import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  KakalUiModule,
  KKLTableActionsModule,
} from '../../../kakal-ui/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../../../kakal-ui/src/lib/angular-material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    KakalUiModule,
    BrowserAnimationsModule,
    MatIconModule,
    KKLTableActionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
