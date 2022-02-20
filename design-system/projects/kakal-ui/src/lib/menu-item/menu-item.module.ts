import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item.component';
import { KKLIconModule } from '../icon/icon.module'
import { TypographyComponent } from '../typography/typography.component'



@NgModule({
  declarations: [MenuItemComponent],
  imports: [
    CommonModule,
    KKLIconModule,
    TypographyComponent
  ],
  exports: [MenuItemComponent]
})
export class MenuItemModule { }
