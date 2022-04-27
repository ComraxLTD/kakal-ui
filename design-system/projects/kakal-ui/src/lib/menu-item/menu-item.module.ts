import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item.component';
import { KKLIconModule } from '../icon/icon.module';
import { KKLTypographyModule } from '../typography/typography.module';

@NgModule({
  declarations: [MenuItemComponent],
  imports: [CommonModule, KKLIconModule, KKLTypographyModule],
  exports: [MenuItemComponent],
})
export class KKLMenuItemModule {}