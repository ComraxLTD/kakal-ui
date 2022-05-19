import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import he from '@angular/common/locales/he';
import { registerLocaleData } from '@angular/common';

import { MaterialModule } from './angular-material/material.module';
import { CoreModule } from './core-module/core.module';
import { ReactiveFormsModule } from '@angular/forms';

import { KKLButtonModule } from './button/button.module';
import { KKLIconModule } from './icon/icon.module';
import { KKLNavigationModule } from './navigation/navigation.module';
import { KKLBreadCrumbsModule } from './bread-crumbs/bread-crumbs.module';
import { KKLTypographyModule } from './typography/typography.module';
import { KklTitleModule } from './kkl-title/kkl-title.module';

import { KKLStepTitleModule } from './step-title/step-title.module';

import { KKLFormModule } from './form/form/form.module';

import { KKLFormAutoCompleteModule } from './form/form-autocomplete/form-autocomplete.module';
import { KklFormCalendarModule } from './form/form-calendar/form-calendar.module';
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
import { StatusProgressModule } from './status-progress/status-progress.module';
import { KKLMenuBarModule } from './menu-bar/menu-bar.module';

import { KKLProgressSpinnerModule } from './progress-spinner/progress-spinner.module';

// CARDS
import { KKLCardLobbyModule } from './cards/card-lobby/card-lobby.module';
import { KKLCardInfoModule } from './cards/card-info/card-info.module';
import { KKLCardStatusModule } from './cards/card-status/card-status.module';
import { KKLCardStepModule } from './cards/card-step/card-step.module';
import { KKLCardUserModule } from './cards/card-user/card-user.module';
import { KKLCardFilterModule } from './cards/card-filter/card-filter.module';
import { KKLCardAddModule } from './cards/card-add/card-add.module';
import { KKLCardDocumentModule } from './cards/card-document/card-document.module';

import { KKLStepsLayoutModule } from './layouts/steps-layout/steps-layout.module';
import { KKLLayoutModule } from './layouts/layout/layout.module';

import { KKSectionModule } from './layouts/section/section.module';
import { KKLAccordionLayoutModule } from './layouts/accordion-layout/accordion-layout.module';
import { KKPageModule } from './layouts/page/page.module';
import { KKLStepsAccordionModule } from './layouts/steps-accordion-layout/steps-accordion.module';
import { KKLAdvancedSearchLayoutModule } from './layouts/advanced-search-layout/advanced-search-layout.module';

import { KKLNavbarModule } from './navbar/navbar.module';
import { KKLNavbarBottomModule } from './navbar-bottom/navbar-bottom.module';
import { KKLStepperMobileModule } from './stepper-mobile/stepper-mobile.module';
import { KKLListMenuModule } from './list-menu/list-menu.module';
import { KKLHoverModule } from './kkl-hover/kkl-hover.module';

import { KKLExpandPanelModule } from './expand-panel/expand-panel.module';
import { KKLChipsModule } from './chips/chips.module';

import { KKLFiltersModule } from './filters/filters.module';

import { OpenMotionsModule } from './open-motions/open-motions.module';

import { KKLTabsModule } from './tabs/tabs.module';

import { KKLNewTableModule } from './kkl-table/kkl-table.module';

import { KKLVerticalStepsModule } from './vertical-steps/vertical-steps.module';
import { FacilityCardModule } from './facility-card/facility-card.module';

import { KKLDrawerModule } from './drawers/drawer.module';

import { CarouselModule } from './carousel/carousel.module';

import { KKLFullCalendarModule } from './full-calendar/full-calendar.module';

import { MeiFormModule } from './mei-form/mei-form.module';

// GRIDS

import { KKLDocumentGridModule } from './grids/document-grid/document-grid.module';
import { KKLLobbyGridModule } from './grids/lobby-grid/lobby.module';
import { KKLDisplayGridModule } from './grids/display-grid/display-grid.module';
// GROUPS
import { KKLDisplayGroupModule } from './groups/display-group/display-group.module';

import { MeiServiceModule } from './mei-services/mei-services.module';
import { KKLStepGroupModule } from './groups/step-group/step-group.module';

registerLocaleData(he);

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,

    //TOOLS
    KKLTabsModule,
    OpenMotionsModule,
    KKLHoverModule,

    KKLProgressSpinnerModule,

    KKLNavigationModule,
    KKLMenuBarModule,

    StatusProgressModule,
    KKLIconModule,
    KklTitleModule,
    KKLStepTitleModule,
    KKLSidenavModule,
    KKLPageHeadlineModule,
    KKLBreadCrumbsModule,
    KKLListMenuModule,
    KKLExpandPanelModule,

    KKLDrawerModule,

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
    KklFormCalendarModule,

    //KKL NEW TABLE MODULES
    KKLNewTableModule,
    MeiFormModule,

    // TABLE MODULES
    KKLTableModule,
    KKLHeaderCellModule,
    KKLTableCellModule,

    KKLDirectivesModule,
    KKLPipesModule,
    SpinnerModule,

    // CARDS
    KKLCardLobbyModule,
    KKLCardAddModule,
    KKLCardInfoModule,
    KKLCardStatusModule,
    KKLCardStepModule,
    KKLCardUserModule,
    KKLCardDocumentModule,
    KKLCardFilterModule,


    // NAVBAR
    KKLNavbarModule,
    KKLNavbarBottomModule,

    // STEPPER
    KKLStepperMobileModule,
    KKLStepGroupModule,
    KKLStepsLayoutModule,

    KKLVerticalStepsModule,

    // LAYOUT
    KKLLayoutModule,
    KKLLobbyGridModule,
    KKLChipsModule,
    KKLStepsAccordionModule,
    KKLAccordionLayoutModule,
    KKLAdvancedSearchLayoutModule,

    // GRIDS

    KKLDocumentGridModule,
    KKLDisplayGridModule,

    // GROUPS
    KKLDisplayGroupModule,

    KKSectionModule,
    KKPageModule,
    FacilityCardModule,
    CarouselModule,
    KKLFullCalendarModule,
  ],
  exports: [
    //TOOLS
    KKLTabsModule,
    OpenMotionsModule,
    KKLHoverModule,
    KKLProgressSpinnerModule,
    KKLBreadCrumbsModule,
    KKLNavigationModule,

    KKLDrawerModule,

    KKLMenuBarModule,

    KKLButtonModule,

    KKLIconModule,
    KKLTypographyModule,
    KklTitleModule,
    KKLStepTitleModule,
    KKLSidenavModule,
    StatusProgressModule,
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
    KklFormCalendarModule,

    // NEW TABLE
    KKLNewTableModule,
    MeiFormModule,
    MeiServiceModule,

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
    KKLCardFilterModule,
    KKLCardUserModule,
    KKLCardDocumentModule,
    KKLCardAddModule,

    // NAVBAR
    KKLNavbarModule,
    KKLNavbarBottomModule,

    // GRIDS

    KKLDocumentGridModule,
    KKLDisplayGridModule,

    // GROUPS
    KKLDisplayGroupModule,

    // LAYOUT
    KKLLayoutModule,
    KKLLobbyGridModule,
    KKLChipsModule,
    KKLAccordionLayoutModule,
    KKLStepsAccordionModule,
    KKLAdvancedSearchLayoutModule,

    // STEPPER
    KKLStepperMobileModule,
    KKLStepGroupModule,
    KKLStepsLayoutModule,

    KKLVerticalStepsModule,

    KKSectionModule,
    KKPageModule,

    FacilityCardModule,
    CarouselModule,
    KKLFullCalendarModule,
  ],
})
export class KakalUiModule {}
