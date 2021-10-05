import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material/material.module';
import { AppComponent } from './components/root/app.component';
import { IconComponent } from './components/icon/icon.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { TypographyComponent } from './components/typography/typography.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { ToNavComponent } from './components/navigation/to-nav/to-nav.component';
import { ClassesDirective } from './utilities/directives/classes.directive';
import { FormModule } from './components/form/form.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TableComponent } from './components/table/table.component';
import { CardDashboardComponent } from './components/cards/card-dashboard/card-dashboard.component';
import { CardStatusComponent } from './components/cards/card-status/card-status.component';
import { CardStepComponent } from './components/cards/card-step/card-step.component';
import { CardWizardComponent } from './components/cards/card-wizard/card-wizard.component';
import { ColorDirective } from './utilities/directives/color.directive';
import { SizeDirective } from './utilities/directives/size.directive';
import { ButtonDirective } from './utilities/directives/button.directive';
import { UnderlineDirective } from './utilities/directives/underline.directive';
import { VariantDirective } from './utilities/directives/variant.directive';
import { StepComponent } from './components/step/step.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { NavigationComponent } from './exemples/navigation/navigation.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IconComponent,
    NavbarComponent,
    TypographyComponent,
    DashboardCardComponent,
    ToNavComponent,
    PaginationComponent,
    TableComponent,
    
    CardDashboardComponent,
    CardStatusComponent,
    CardStepComponent,
    CardWizardComponent,

    ClassesDirective,
    VariantDirective,
    SizeDirective,
    
    StepComponent,
    StepperComponent,
    NavigationComponent,
    MenuComponent,
    
    ClassesDirective,
    ColorDirective,
    SizeDirective,
    ButtonDirective,
    UnderlineDirective,
    VariantDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
