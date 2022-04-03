import { NgModule } from '@angular/core';
import { FormCheckboxGroupComponent } from './form-checkbox-group.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { KKLPipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatListModule,
    ReactiveFormsModule,
    KKLPipesModule,
    FlexLayoutModule,
  ],
  declarations: [FormCheckboxGroupComponent],
  exports: [FormCheckboxGroupComponent],
})
export class KKLFormCheckboxGroupModule {}
