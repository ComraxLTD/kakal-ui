import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecimalPipe, DatePipe } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '../material/material.module';
import { AppComponent } from './components/root/app.component';

import { DashboardComponent } from './screens/dashboard/dashboard.component';

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
import { CardUserComponent } from './components/cards/card-user/card-user.component';
import { CardFilterComponent } from './components/cards/card-filter/card-filter.component';

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
import { FormAutocompleteComponent } from './components/form/form-autocomplete/form-autocomplete.component';

import { ExpandPanelComponent } from './components/expand-panel/expand-panel.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { NavbarBottomComponent } from './components/navigation/navbar-bottom/navbar-bottom.component';

import { FormExComponent } from './examples/form-ex/form-ex.component';
import { InputExComponent } from './examples/input-ex/input-ex.component';
import { TableExComponent } from './examples/table-ex/table-ex.component';
import { StepperExComponent } from './examples/stepper-ex/stepper-ex.component';
import { FiltersExComponent } from './examples/filters-ex/filters-ex.component';
import { DashboardExComponent } from './examples/dashboard-ex/dashboard-ex.component';

import { AreaPipe } from './utilities/pipes/area.pipe';
import { FormatPipe } from './utilities/pipes/format.pipe';

import { ColumnFilterComponent } from './components/columns/column-filter/column-filter.component';
import { ColumnFormComponent } from './components/columns/column-form/column-form.component';
import { StatusComponent } from './components/status/status.component';

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
    ColumnFilterComponent,
    ColumnFormComponent,


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
    StatusComponent,

    StepperExComponent,
    InputExComponent,
    FormExComponent,
    TableExComponent,
    FiltersExComponent,
    DashboardExComponent
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
  providers: [AreaPipe, DecimalPipe, DatePipe, FormatPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
