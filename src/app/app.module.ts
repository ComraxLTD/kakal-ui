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

import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';

import { PaginationComponent } from './components/pagination/pagination.component';
import { TableComponent } from './components/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { ClassesDirective } from './utilities/directives/classes.directive';
import { CardDashboardComponent } from './components/cards/card-dashboard/card-dashboard.component';
import { CardStatusComponent } from './components/cards/card-status/card-status.component';
import { CardStepComponent } from './components/cards/card-step/card-step.component';
import { CardWizardComponent } from './components/cards/card-wizard/card-wizard.component';

import { ColorDirective } from './utilities/directives/color.directive';
import { SizeDirective } from './utilities/directives/size.directive';
import { ButtonDirective } from './utilities/directives/button.directive';
import { VariantDirective } from './utilities/directives/variant.directive';

import { StepComponent } from './components/step/step.component';
import { StepperComponent } from './components/stepper/stepper.component';

import { FormComponent } from './components/form/form/form.component';
import { FormInputComponent } from './components/form/form-input/form-input.component';
import { FormGroupComponent } from './components/form/form-group/form-group.component';
import { FormRadioComponent } from './components/form/form-radio/form-radio.component';
import { CardUserComponent } from './components/cards/card-user/card-user.component';
import { FormAutocompleteComponent } from './components/form/form-autocomplete/form-autocomplete.component';
import { ExpandPanelComponent } from './components/expand-panel/expand-panel.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { NavbarBottomComponent } from './components/navigation/navbar-bottom/navbar-bottom.component';
import { StepperExComponent } from './exemples/stepper-ex/stepper-ex.component';
import { InputExComponent } from './exemples/input-ex/input-ex.component';
import { FormExComponent } from './exemples/form-ex/form-ex.component';
import { CardFilterComponent } from './components/cards/card-filter/card-filter.component';
import { FiltersComponent } from './exemples/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IconComponent,
    TypographyComponent,

    FormComponent,
    FormInputComponent,
    FormGroupComponent,
    FormRadioComponent,
    FormAutocompleteComponent,

    PaginationComponent,
    TableComponent,

    CardDashboardComponent,
    CardStatusComponent,
    CardStepComponent,
    CardWizardComponent,
    CardUserComponent,
    CardFilterComponent,

    

    ClassesDirective,
    VariantDirective,
    SizeDirective,

    StepComponent,
    StepperComponent,

    MenuComponent,
    MenuItemComponent,
    NavbarComponent,
    NavbarBottomComponent,

    ListItemComponent,

    ExpandPanelComponent,

    ClassesDirective,
    ColorDirective,
    SizeDirective,
    ButtonDirective,
    VariantDirective,

    StepperExComponent,
    InputExComponent,
    FormExComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
