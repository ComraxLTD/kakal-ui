import { NgModule } from '@angular/core';
import { FormCounterComponent } from './form-counter.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLIconModule } from '../../icon/icon.module';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLDirectivesModule } from '../../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    KKLIconModule,
    KKLTypographyModule,
    KKLDirectivesModule,
  ],
  declarations: [FormCounterComponent],
  exports: [FormCounterComponent],
})
export class KKLFormCounterModule {}
