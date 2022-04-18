import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SortButtonComponent } from './sort-button.component';
@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, FlexLayoutModule],
  declarations: [SortButtonComponent],
  exports: [SortButtonComponent],
})
export class KKLSortButtonModule {}
