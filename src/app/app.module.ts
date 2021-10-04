import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material/material.module';
import { AppComponent } from './components/root/app.component';
import { IconComponent } from './components/icon/icon.component';
import { FormContainerComponent } from './components/form/form-container/form-container.component';
import { FormInputComponent } from './components/form/form-input/form-input.component';
import { InputRadioComponent } from './components/form/input-radio/input-radio.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { TypographyComponent } from './components/typography/typography.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { StatusCardComponent } from './components/cards/status-card/status-card.component';
import { IconCardComponent } from './components/cards/icon-card/icon-card.component';
import { ToNavComponent } from './components/navigation/to-nav/to-nav.component';
import { ClassesDirective } from './utilities/directives/classes.directive';
import { ColorDirective } from './utilities/directives/color.directive';
import { SizeDirective } from './utilities/directives/size.directive';
import { ButtonDirective } from './utilities/directives/button.directive';
import { UnderlineDirective } from './utilities/directives/underline.directive';
import { VariantDirective } from './utilities/directives/variant.directive';
import { StepComponent } from './components/step/step.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { NavigationComponent } from './exemples/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormContainerComponent,
    FormInputComponent,
    InputRadioComponent,
    IconComponent,
    IconCardComponent,
    NavbarComponent,
    TypographyComponent,
    DashboardCardComponent,
    ToNavComponent,
    StatusCardComponent,
    StepComponent,
    StepperComponent,
    NavigationComponent,
    
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
