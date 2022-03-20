import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './angular-material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core-module/core.module';

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
import { KKLFlexFormModule } from './form/flex-form/flex-form.module';
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
import { KKLCardLobbyModule } from './cards/card-dashboard/card-dashboard.module';
import { KKLCardInfoModule } from './cards/card-info/card-info.module';
import { KKLCardStatusModule } from './cards/card-status/card-status.module';
import { KKLCardStepModule } from './cards/card-step/card-step.module';
import { KKLCardUserModule } from './cards/card-user/card-user.module';
import { KKLCardWizardModule } from './cards/card-wizard/card-wizard.module';

import { KKLNavbarModule } from './navbar/navbar.module';
import { NavbarBottomModule } from './navbar-bottom/navbar-bottom.module';
import { StepperModule } from './stepper/stepper.module';
import { StepperMobileModule } from './stepper-mobile/stepper-mobile.module';
import { StepperLayoutModule } from '../screens/stepper-layout/stepper-layout.module';
import { KKLListMenuModule } from '../lib/list-menu/list-menu.module';
import { KKLHoverModule } from '../lib/kkl-hover/kkl-hover.module';
import { KKLExpandPanelModule } from './expand-panel/expand-panel.module';
import { KKLChipsModule } from './chips/chips.module';
import { OpenMotionsModule } from './open-motions/open-motions.module';
import { KKLLayoutModule } from '../screens/layout/layout.module';
import { KKLLobbyModule } from '../lib/lobby/lobby.module';
import { KKLDisplayDataModule } from '../lib/display-data/display-data.module';
import { KKLFiltersModule } from '../lib/filters/filters.module';

import { FormExampleComponent } from './examples/form-example/form-example.component';

@NgModule({
  declarations: [FormExampleComponent, SidenavExampleComponent],
  imports: [
    CoreModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    //TOOLS
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
    KKLFlexFormModule,
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
  ],
  exports: [
    //TOOLS
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
    KKLFlexFormModule,
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
  ],
})
export class KakalUiModule {}
