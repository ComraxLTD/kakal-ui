import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './angular-material/material.module';
import { CoreModule } from './core-module/core.module';
import { ReactiveFormsModule } from '@angular/forms';

import { KKLButtonModule } from './button/button.module';
import { KKLIconModule } from './icon/icon.module';
import { KKLNavigationModule } from './navigation/navigation.module';
import { KKLBreadCrumbsModule } from './bread-crumbes/bread-crumbs.module';
import { KKLTypographyModule } from './typography/typography.module';
import { KklTitleModule } from './kkl-title/kkl-title.module';
import { KKLInfoCardModule } from './cards/info-card/info-card.module';
import { KKLFilterCardModule } from './cards/filter-card/filter-card.module';

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

import { KKLTableModule } from './table/components/table/table.module';
import { KKLTableCellModule } from './table/components/cells/table-cell.module';
import { KKLHeaderCellModule } from './table/components/header-cells/header-cells.module';

import { SidenavModule } from './sidenav/sidenav.module';

import { KKLDialogModule } from './dialog/dialog.module';
import { SpinnerModule } from './spinner/spinner.module';

import { KKLDirectivesModule } from './directives/directives.module';
import { KKLPageHeadlineModule } from './page-headline/page-headline.module';
import { KKLPipesModule } from './pipes/pipes.module';
import { KKLStatusBarsModule } from './status-bars/status-bars.module';

import { SidenavExampleComponent } from './examples/sidenav-example/sidenav-example.component';
import { KKLCardLobbyModule } from './cards/card-lobby/card-lobby.module';
import { KKLCardInfoModule } from './cards/card-info/card-info.module';
import { KKLCardStatusModule } from './cards/card-status/card-status.module';
import { KKLCardStepModule } from './cards/card-step/card-step.module';
import { KKLCardUserModule } from './cards/card-user/card-user.module';
import { KKLCardWizardModule } from './cards/card-wizard/card-wizard.module';

import { StepperLayoutModule } from './layouts/stepper-layout/stepper-layout.module';
import { KKLLayoutModule } from './layouts/layout/layout.module';

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
import { KKSectionModule } from './layouts/section/section.module';
import { KKPageModule } from './layouts/page/page.module';
import { KKLTabsModule } from './tabs/tabs.module';

import { KKLNewTableModule } from './kkl-table/kkl-table.module';
import { KKLVerticalStepperModule } from './vertical-stepper/vertical-stepper.module';

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
    KKLFilterCardModule,
    KKLNavigationModule,
    KKLStatusBarsModule,
    KKLMenuModule,
    KKLIconModule,
    KklTitleModule,
    KKLStepTitleModule,
    SidenavModule,
    KKLPageHeadlineModule,
    KKLInfoCardModule,
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
    // LAYOUT
    KKLLayoutModule,
    KKLLobbyModule,
    KKLChipsModule,
    KKLDisplayDataModule,
    KKLVerticalStepperModule,

    KKSectionModule,
    KKPageModule,
  ],
  exports: [
    //TOOLS
    KKLTabsModule,
    OpenMotionsModule,
    KKLHoverModule,
    KKLFilterCardModule,
    KKLBreadCrumbsModule,
    KKLNavigationModule,
    MaterialModule,
    KKLMenuItemModule,
    KKLButtonModule,
    KKLIconModule,
    KKLTypographyModule,
    KklTitleModule,
    KKLStepTitleModule,
    SidenavModule,
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
    KKLInfoCardModule,

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

    KKSectionModule,
    KKPageModule,

    KKLVerticalStepperModule,
  ],
})
export class KakalUiModule {}
