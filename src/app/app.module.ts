import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from 'src/material/material.module';
import { AppComponent } from './components/root/app.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { IconComponent } from './components/icon/icon.component';
import { TypographyComponent } from './components/typography/typography.component';

import { ToNavComponent } from './components/navigation/to-nav/to-nav.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { NavigationComponent } from './exemples/navigation/navigation.component';
import { MenuComponent } from './components/menu/menu.component';

import { PaginationComponent } from './components/pagination/pagination.component';
import { TableComponent } from './components/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

import { ClassesDirective } from './utilities/directives/classes.directive';
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

import { FormComponent } from './components/form/form/form.component';
import { FormInputComponent } from './components/form/form-input/form-input.component';
import { FormGroupComponent } from './components/form/form-group/form-group.component';
import { FormRadioComponent } from './components/form/form-radio/form-radio.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IconComponent,
    NavbarComponent,
    TypographyComponent,
    ToNavComponent,

    FormComponent,
    FormInputComponent,
    FormGroupComponent,
    FormRadioComponent,

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
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
