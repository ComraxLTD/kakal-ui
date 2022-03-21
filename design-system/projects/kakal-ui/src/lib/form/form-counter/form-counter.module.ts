import { NgModule } from '@angular/core';
import { FormCounterComponent } from './form-counter.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLIconModule } from '../../icon/icon.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLDirectivesModule } from '../../directives/directives.module';
import { KKLButtonModule } from '../../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    KKLButtonModule,
    KKLIconModule,
    KKLTypographyModule,
    KKLDirectivesModule,
  ],
  declarations: [FormCounterComponent],
  exports: [FormCounterComponent],
})
export class KKLFormCounterModule {}
