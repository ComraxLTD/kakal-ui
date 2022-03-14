import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './chip/chip.component';
import { ChipListComponent } from './chip-list/chip-list.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ChipComponent,
    ChipListComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ChipComponent,
    ChipListComponent
  ]
})
export class KKLChipsModule { }
