import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core-module/core.module';
import { MaterialModule } from '../angular-material/material.module';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CoreModule, CommonModule, MaterialModule],
  providers: [],
  exports: [SpinnerComponent],
})
export class SpinnerModule {}
