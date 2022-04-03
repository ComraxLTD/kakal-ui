import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { KKLDirectivesModule } from '../directives/directives.module';
import { KKLIconModule } from '../icon/icon.module';
import { NavbarBottomComponent } from './navbar-bottom.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    KKLIconModule,
    KKLDirectivesModule,
  ],
  declarations: [NavbarBottomComponent],
  exports: [NavbarBottomComponent],
})
export class NavbarBottomModule {}
