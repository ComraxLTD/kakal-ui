import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecimalPipe, DatePipe } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { AppComponent } from './components/root/app.component';

import { DashboardComponent } from './screens/dashboard/dashboard.component';

import { IconComponent } from './components/icon/icon.component';
import { TypographyComponent } from './components/typography/typography.component';

import { MenuComponent } from './components/menu/menu.component';

import { PaginationComponent } from './components/pagination/pagination.component';
import { TableComponent } from './components/table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';

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

import { StepperComponent } from './components/stepper/stepper.component';

import { FormComponent } from './components/form/form/form.component';
import { FormInputComponent } from './components/form/form-input/form-input.component';
import { FormGroupComponent } from './components/form/form-group/form-group.component';
import { FormAutocompleteComponent } from './components/form/form-autocomplete/form-autocomplete.component';
import { FormUploadComponent } from './components/form/form-upload/form-upload.component';

import { ExpandPanelComponent } from './components/expand-panel/expand-panel.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ListItemComponent } from './components/list-item/list-item.component';

import { FormExComponent } from './examples/form-ex/form-ex.component';
import { InputExComponent } from './examples/input-ex/input-ex.component';
import { TableExComponent } from './examples/table-ex/table-ex.component';
import { StepperExComponent } from './examples/stepper-ex/stepper-ex.component';
import { DashboardExComponent } from './examples/dashboard-ex/dashboard-ex.component';

import { AreaPipe } from './utilities/pipes/area.pipe';
import { FormatPipe } from './utilities/pipes/format.pipe';

import { ColumnFormComponent } from './components/columns/column-form/column-form.component';
import { StatusComponent } from './components/status/status.component';
import { LayoutComponent } from './screens/layout/layout.component';
import { LayoutExComponent } from './examples/layout-ex/layout-ex.component';
import { UnderlineDirective } from './utilities/directives/underline.directive';
import { FormRadioComponent } from './components/form/form-radio/form-radio.component';
import { ColumnFilterComponent } from './components/columns/column-filter/column-filter.component';
import { BorderDirective } from './utilities/directives/border.directive';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarBottomComponent } from './components/navbar-bottom/navbar-bottom.component';
import { TitleComponent } from './components/title/title.component';
import { ExpandPanelExComponent } from './examples/expand-panel-ex/expand-panel-ex.component';
import { TitleExComponent } from './examples/title-ex/title-ex.component';

import { LoginDashboardComponent } from './screens/login/components/login-dashboard/login-dashboard.component';
import { LoginFormComponent } from './screens/login/components/login-form/login-form.component';
import { LoginExComponent } from './examples/login-ex/login-ex.component';
import { IconModel } from './components/icon/icon.model';
import { FormUploadExComponent } from './examples/formupload-ex/formupload-ex.component';
import { FormAutocompleteExComponent } from './examples/formautocomplete-ex/formautocomplete-ex.component';
import { NavbarExComponent } from './examples/navbar-ex/navbar-ex.component';
import { FiltersExComponent } from './examples/filters-ex/filters-ex.component';

@NgModule({
  declarations: [
    AppComponent,

    // SCREEN COMPS
    DashboardComponent,
    LayoutComponent,


    LoginFormComponent,
    LoginDashboardComponent,
    LoginExComponent,


    // SHARED COMPS

    IconComponent,
    TypographyComponent,
    ListItemComponent,
    ExpandPanelComponent,
    TitleComponent,

    // FORM COMPS
    FormComponent,
    FormInputComponent,
    FormGroupComponent,
    FormRadioComponent,
    FormAutocompleteComponent,
    FormUploadComponent,

    // TABLE COMPS
    PaginationComponent,
    TableComponent,
    ColumnFilterComponent,
    ColumnFormComponent,

    // CARD COMPS
    CardDashboardComponent,
    CardStatusComponent,
    CardStepComponent,
    CardWizardComponent,
    CardUserComponent,
    CardFilterComponent,

    // NAVIGATION COMPS
    MenuComponent,
    MenuItemComponent,
    NavbarComponent,
    NavbarBottomComponent,
    StepperComponent,

    // DIRECTIVES
    VariantDirective,
    SizeDirective,
    ColorDirective,
    SizeDirective,
    ButtonDirective,
    VariantDirective,
    UnderlineDirective,
    BorderDirective,

    StatusComponent,


    DashboardExComponent,
    LayoutExComponent,
    FormExComponent,
    InputExComponent,
    TitleExComponent,
    TableExComponent,
    FormUploadExComponent,
    FormAutocompleteExComponent,
    StepperExComponent,
    NavbarExComponent,
    FiltersExComponent,

    ExpandPanelExComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [AreaPipe, DecimalPipe, DatePipe, FormatPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
