import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DateFnsAdapter, MatDateFnsModule } from '@angular/material-date-fns-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { he } from 'date-fns/locale';
import { KKLIconModule } from '../icon/icon.module';
import { MeiAutocompleteComponent } from './mei-autocomplete/mei-autocomplete.component';
import { MeiCurrencyComponent } from './mei-currency/mei-currency.component';
import { MeiDatepickerComponent } from './mei-datepicker/mei-datepicker.component';
import { PhoneInputDirective } from './mei-directives/phone.directive';
import { SumInputDirective } from './mei-directives/sum.directive';
import { MeiFormComponent } from './mei-form/mei-form.component';
import { MeiInputComponent } from './mei-input/mei-input.component';
import { MeiMultiAutocompleteComponent } from './mei-multi-autocomplete/mei-multi-autocomplete.component';
import { MeiRadiogroupComponent } from './mei-radiogroup/mei-radiogroup.component';
import { MeiRangeDatepickerComponent } from './mei-range-datepicker/mei-range-datepicker.component';
import { MeiSelectComponent } from './mei-select/mei-select.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { KKLDirectivesModule } from '../directives/directives.module';
import { MeiTextEditorComponent } from './mei-text-editor/mei-text-editor.component';
import { NgxEditorModule } from 'ngx-editor';
import { MeiRangeComponent } from './mei-range/mei-range.component';
import {MatSliderModule} from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MeiAdvancedSearchComponent } from './mei-advanced-search/mei-advanced-search.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MeiCounterComponent } from './mei-counter/mei-counter.component';
import { MeiCheckboxComponent } from './mei-checkbox/mei-checkbox.component';
import { MeiToggleComponent } from './mei-toggle/mei-toggle.component';
import { MatGridListModule } from '@angular/material/grid-list';
// import { MeiFiltersComponent } from '../kkl-table/components/mei-filters/mei-filters.component';
// import { TableCellPipe } from '../../public-api';
// import { TableCellPipe } from '../mei-services/pipes/table-cell-pipe.pipe';
// import { MeiServiceModule } from '../mei-services/mei-services.module';

export const MY_MY_FORMATS = {
  parse: {
    dateInput: 'P',
  },
  display: {
    dateInput: 'P',
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: 'PP',
    monthYearA11yLabel: 'MMMM yyyy',
  },
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatChipsModule,
    KKLIconModule,
    MatInputModule,
    MatDateFnsModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatButtonModule,
    KKLDirectivesModule,
    NgxEditorModule,
    MatSliderModule,
    MatDividerModule,
    MatExpansionModule,
    KKLDirectivesModule,
    MatGridListModule
  ],
  declarations: [MeiFormComponent, MeiAdvancedSearchComponent, MeiSelectComponent, MeiAutocompleteComponent, MeiMultiAutocompleteComponent, MeiInputComponent,
     SumInputDirective, PhoneInputDirective, MeiDatepickerComponent, MeiRangeDatepickerComponent, MeiRadiogroupComponent, MeiCurrencyComponent, MeiTextEditorComponent, MeiRangeComponent, MeiCounterComponent, MeiCheckboxComponent, MeiToggleComponent],
  exports: [MeiFormComponent, MeiAdvancedSearchComponent, MeiSelectComponent, MeiMultiAutocompleteComponent, MeiAutocompleteComponent, MeiInputComponent,
    SumInputDirective, PhoneInputDirective, MeiDatepickerComponent, MeiRangeDatepickerComponent, MeiRadiogroupComponent, MeiTextEditorComponent, MeiCurrencyComponent, MeiRangeComponent, MeiCounterComponent, MeiCheckboxComponent, MeiToggleComponent],
    providers: [
      { provide: DateAdapter, useClass: DateFnsAdapter },
      { provide: MAT_DATE_LOCALE, useValue: he },
    // {provide: MAT_DATE_FORMATS, useValue: MY_MY_FORMATS},
    // { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FNS_FORMATS },
    // { provide: MAT_DATE_FNS_FORMATS, useValue: frenchConfig }
    //   {
    //   provide: DateAdapter,
    //   useClass: DateFnsAdapter,
    //   deps: [MAT_DATE_LOCALE, MAT_DATE_FN],
    // },

    // {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class MeiFormModule {}
