import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypographyComponent } from './typography.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [TypographyComponent],
  exports: [TypographyComponent],
})
export class KKLTypographyModule {}
