import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { KKLIconModule } from '../icon/icon.module';
import { KKLTypographyModule } from '../typography/typography.module';

@NgModule({
  declarations: [MenuBarComponent, MenuCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    KKLIconModule,
    KKLTypographyModule,
  ],
  exports: [MenuBarComponent, MenuCardComponent],
})
export class KKLMenuBarModule {}
