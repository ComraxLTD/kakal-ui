import { NgModule } from '@angular/core';
import { KKLListMenuComponent } from './list-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { KKLIconModule } from '../icon/icon.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    KKLIconModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [KKLListMenuComponent],
  exports: [KKLListMenuComponent],
})
export class KKLListMenuModule {}
