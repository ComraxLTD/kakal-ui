import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './angular-material/material.module';
import { CoreModule } from './core-module/core.module';
import { ReactiveFormsModule } from '@angular/forms';

import { KKLButtonModule } from './button/button.module';
import { KKLIconModule } from './icon/icon.module';
import { KKLNavigationModule } from './navigation/navigation.module';
import { KKLBreadCrumbsModule } from './bread-crumbs/bread-crumbs.module';
import { KKLTypographyModule } from './typography/typography.module';
import { KklTitleModule } from './kkl-title/kkl-title.module';

import { KKLMenuItemModule } from './menu-item/menu-item.module';
import { KKLMenuModule } from './menu/menu.module';
import { KKLStepTitleModule } from './step-title/step-title.module';

import { KKLFormModule } from './form/form/form.module';

import { KKLFormAutoCompleteModule } from './form/form-autocomplete/form-autocomplete.module';
import { KKLFormCurrencyModule } from './form/form-currency/form-currency.module';
import { KKLFormDateModule } from './form/form-date/form-date.module';
import { KKLFormRadioModule } from './form/form-radio/form-radio.module';
import { KKLFormSelectModule } from './form/form-select/form-select.module';
import { KKLFormTextEditorModule } from './form/form-texteditor/form-texteditor.module';
import { KKLFormUploadModule } from './form/form-upload/form-upload.module';
import { KKLFormCheckboxGroupModule } from './form/form-checkbox-group/form-checkbox-group.module';
import { KKLFormCheckboxModule } from './form/form-checkbox/form-checkbox.module';
import { KKLFormSearchModule } from '../lib/form/form-search/form-search.module';
import { KKLFormCounterModule } from '../lib/form/form-counter/form-counter.module';

import { KKLTableModule } from './table/table.module';
import { KKLTableCellModule } from './table/components/cells/table-cell.module';
import { KKLHeaderCellModule } from './table/components/header-cells/header-cells.module';


import { KKLDialogModule } from './dialog/dialog.module';

import { KKLSidenavModule } from './sidenav/sidenav.module';
import { SpinnerModule } from './spinner/spinner.module';

import { KKLDirectivesModule } from './directives/directives.module';
import { KKLPageHeadlineModule } from './page-headline/page-headline.module';
import { KKLPipesModule } from './pipes/pipes.module';
import { KKLStatusBarsModule } from './status-bars/status-bars.module';
import { KKLMenuBarModule } from './menu-bar/menu-bar.module';

import { SidenavExampleComponent } from './examples/sidenav-example/sidenav-example.component';

// CARDS
import { KKLCardLobbyModule } from './cards/card-lobby/card-lobby.module';
import { KKLCardInfoModule } from './cards/card-info/card-info.module';
import { KKLCardStatusModule } from './cards/card-status/card-status.module';
import { KKLCardStepModule } from './cards/card-step/card-step.module';
import { KKLCardUserModule } from './cards/card-user/card-user.module';
import { KKLCardWizardModule } from './cards/card-wizard/card-wizard.module';
import { KKLCardFilterModule } from './cards/card-filter/card-filter.module';

import { StepperLayoutModule } from './layouts/stepper-layout/stepper-layout.module';
import { KKLLayoutModule } from './layouts/layout/layout.module';

import { KKSectionModule } from './layouts/section/section.module';
import { KKLAccordionLayoutModule } from './layouts/accordion-layout/accordion-layout.module';
import { KKPageModule } from './layouts/page/page.module';
import { KKLAccordionStepsModule } from './layouts/accordion-steps-layout/accordion-steps.module';
import { KKLAdvancedSearchLayoutModule } from './layouts/advanced-search-layout/advanced-search-layout.module';

import { KKLNavbarModule } from './navbar/navbar.module';
import { NavbarBottomModule } from './navbar-bottom/navbar-bottom.module';
import { StepperModule } from './stepper/stepper.module';
import { StepperMobileModule } from './stepper-mobile/stepper-mobile.module';
import { KKLListMenuModule } from './list-menu/list-menu.module';
import { KKLHoverModule } from './kkl-hover/kkl-hover.module';
import { KKLExpandPanelModule } from './expand-panel/expand-panel.module';
import { KKLChipsModule } from './chips/chips.module';

import { KKLLobbyModule } from './lobby/lobby.module';
import { KKLDisplayDataModule } from './display-data/display-data.module';
import { KKLFiltersModule } from './filters/filters.module';

import { FormExampleComponent } from './examples/form-example/form-example.component';
import { OpenMotionsModule } from './open-motions/open-motions.module';

import { KKLTabsModule } from './tabs/tabs.module';

import { KKLNewTableModule } from './kkl-table/kkl-table.module';

import { KKLVerticalStepsModule } from './vertical-steps/vertical-steps.module'
import { FacilityCardModule } from './facility-card/facility-card.module';

import he from '@angular/common/locales/he';
import { registerLocaleData } from '@angular/common';
registerLocaleData(he);

@NgModule({
  declarations: [FormExampleComponent, SidenavExampleComponent],
  imports: [
    CoreModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    //TOOLS
    KKLTabsModule,
    OpenMotionsModule,
    KKLHoverModule,
    KKLCardFilterModule,

    KKLNavigationModule,
    KKLMenuModule,
    KKLMenuBarModule,

    KKLStatusBarsModule,
    KKLIconModule,
    KklTitleModule,
    KKLStepTitleModule,
    KKLSidenavModule,
    KKLPageHeadlineModule,
    KKLBreadCrumbsModule,
    KKLListMenuModule,
    KKLExpandPanelModule,

    KKLFiltersModule,

    // FORMS MODULES
    KKLFormModule,
    KKLFormAutoCompleteModule,
    KKLFormRadioModule,
    KKLFormDateModule,
    KKLFormSelectModule,
    KKLFormCurrencyModule,
    KKLFormUploadModule,
    KKLDialogModule,
    KKLFormTextEditorModule,
    KKLFormCheckboxModule,
    KKLFormCheckboxGroupModule,
    KKLFormCounterModule,
    KKLFormSearchModule,

    //KKL NEW TABLE MODULES
    KKLNewTableModule,

    // TABLE MODULES
    KKLTableModule,
    KKLHeaderCellModule,
    KKLTableCellModule,

    KKLDirectivesModule,
    KKLPipesModule,
    SpinnerModule,

    // CARDS
    KKLCardLobbyModule,
    KKLCardInfoModule,
    KKLCardStatusModule,
    KKLCardStepModule,
    KKLCardUserModule,
    KKLCardWizardModule,

    // NAVBAR
    KKLNavbarModule,
    NavbarBottomModule,

    // STEPPER
    StepperModule,
    StepperMobileModule,
    StepperLayoutModule,

    KKLVerticalStepsModule,

    // LAYOUT
    KKLLayoutModule,
    KKLLobbyModule,
    KKLChipsModule,
    KKLDisplayDataModule,
    KKLAccordionStepsModule,
    KKLAccordionLayoutModule,
    KKLAdvancedSearchLayoutModule,

    KKSectionModule,
    KKPageModule,
    FacilityCardModule
  ],
  exports: [

    //TOOLS
    KKLTabsModule,
    OpenMotionsModule,
    KKLHoverModule,
    KKLCardFilterModule,
    KKLBreadCrumbsModule,
    KKLNavigationModule,

    KKLMenuItemModule,

    KKLMenuBarModule,

    KKLButtonModule,

    KKLIconModule,
    KKLTypographyModule,
    KklTitleModule,
    KKLStepTitleModule,
    KKLSidenavModule,
    KKLStatusBarsModule,
    KKLListMenuModule,
    KKLExpandPanelModule,
    KKLFiltersModule,

    KKLFormModule,
    KKLFormCheckboxModule,
    KKLFormTextEditorModule,
    KKLFormAutoCompleteModule,
    KKLFormRadioModule,
    KKLFormDateModule,
    KKLFormSelectModule,
    KKLFormCurrencyModule,
    KKLFormUploadModule,
    KKLFormCheckboxGroupModule,
    KKLFormCounterModule,
    KKLFormSearchModule,

    // NEW TABLE
    KKLNewTableModule,

    // TABLE
    KKLTableModule,
    KKLHeaderCellModule,
    KKLTableCellModule,

    KKLDialogModule,

    KKLPipesModule,
    KKLDirectivesModule,
    SpinnerModule,
    KKLPageHeadlineModule,
    // CARDS
    KKLCardLobbyModule,
    KKLCardInfoModule,
    KKLCardStatusModule,
    KKLCardStepModule,
    KKLCardUserModule,
    KKLCardWizardModule,
    // NAVBAR
    KKLNavbarModule,
    NavbarBottomModule,

    // STEPPER
    StepperModule,
    StepperMobileModule,
    StepperLayoutModule,

    // LAYOUT
    KKLLayoutModule,
    KKLLobbyModule,
    KKLChipsModule,
    KKLDisplayDataModule,
    KKLAccordionLayoutModule,
    KKLAdvancedSearchLayoutModule,

    KKLVerticalStepsModule,

    KKSectionModule,
    KKPageModule,



    KKLAccordionStepsModule,
    FacilityCardModule
  ],
})
export class KakalUiModule { }
