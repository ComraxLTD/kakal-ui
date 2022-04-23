import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenItemComponent } from './menu-item/menu-item.component';
import { KKLIconModule } from '../icon/icon.module';
import { KKLTypographyModule } from '../typography/typography.module';

@NgModule({
  declarations: [MenuBarComponent, MenItemComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    KKLIconModule,
    KKLTypographyModule,
  ],
  exports: [MenuBarComponent, MenItemComponent],
})
export class KKLMenuBarModule {}
