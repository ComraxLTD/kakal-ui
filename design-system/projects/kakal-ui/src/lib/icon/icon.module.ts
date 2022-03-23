import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { KKLIconDirective } from './icon.directive';
import { IconComponent } from './icon.component';
import { KKLDirectivesModule } from '../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    KKLDirectivesModule,
  ],
  declarations: [IconComponent, KKLIconDirective],
  exports: [MatIconModule, IconComponent, KKLIconDirective],
})
export class KKLIconModule {}
