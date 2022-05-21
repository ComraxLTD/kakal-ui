import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLDirectivesModule } from '../directives/directives.module';
import { KKLIconModule } from '../icon/icon.module';
import { NavbarBottomComponent } from './navbar-bottom.component';
import { FooterButtonDirective } from './navbar-bottom.directive';
import { KKLButtonModule } from '../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    KKLButtonModule,
    FlexLayoutModule,
    KKLIconModule,
    KKLDirectivesModule,
  ],
  declarations: [NavbarBottomComponent, FooterButtonDirective],
  exports: [NavbarBottomComponent, FooterButtonDirective],
})
export class KKLNavbarBottomModule {}
