import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRangeComponent } from './form-range.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLIconModule } from '../../icon/icon.module';
import { KKLFormInputModule } from '../form-input/form-input.module';
import { KKLPipesModule } from '../../pipes/pipes.module';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [FormRangeComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    KKLFormInputModule,
    KKLPipesModule,
    KKLIconModule,
  ],
  providers: [FormBuilder],
  exports: [FormRangeComponent],
})
export class KKLFormRangeModule {}
