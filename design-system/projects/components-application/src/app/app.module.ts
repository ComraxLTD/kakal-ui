import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LobbyComponent } from './components/lobby/lobby.component';
import { CoreModule } from './modules/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ROOT_PREFIX } from '../../../kakal-ui/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [{ provide: ROOT_PREFIX, useValue: 'tac' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
