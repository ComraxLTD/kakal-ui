import { NgModule } from '@angular/core';
import { FormCheckboxGroupComponent } from './form-checkbox-group.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    MatCheckboxModule,
    ReactiveFormsModule,

    FlexLayoutModule,
    MatListModule,
  ],
  declarations: [FormCheckboxGroupComponent],
  exports: [FormCheckboxGroupComponent],
})
export class KKLFormCheckboxGroupModule {}
