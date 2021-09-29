import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material/material.module';
import { AppComponent } from './components/root/app.component';
import { IconComponent } from './components/icon/icon.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { TypographyComponent } from './components/typography/typography.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { StatusCardComponent } from './components/cards/status-card/status-card.component';
import { IconCardComponent } from './components/cards/icon-card/icon-card.component';
import { ToNavComponent } from './components/navigation/to-nav/to-nav.component';
import { ClassesDirective } from './utilities/directives/classes.directive';
import { FormModule } from './components/form/form.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IconComponent,
    IconCardComponent,
    NavbarComponent,
    TypographyComponent,
    DashboardCardComponent,
    ToNavComponent,
    StatusCardComponent,
    PaginationComponent,
    ClassesDirective,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
