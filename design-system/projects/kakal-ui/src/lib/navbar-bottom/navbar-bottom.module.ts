import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLDirectivesModule } from '../directives/directives.module';
import { KKLIconModule } from '../icon/icon.module';
import { NavbarBottomComponent } from './navbar-bottom.component';
import { NavbarBottomDirective } from './navbar-bottom.directive';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    KKLIconModule,
    KKLDirectivesModule,
  ],
  declarations: [NavbarBottomComponent, NavbarBottomDirective],
  exports: [NavbarBottomComponent, NavbarBottomDirective],
})
export class NavbarBottomModule {}
