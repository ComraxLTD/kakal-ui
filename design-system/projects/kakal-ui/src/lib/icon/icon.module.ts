import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { KKLIconDirective } from './icon.directive';
import { IconComponent } from './icon.component';
import { KKLDirectivesModule } from '../directives/directives.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    KKLDirectivesModule,
  ],
  declarations: [IconComponent, KKLIconDirective],
  exports: [MatIconModule, IconComponent, KKLIconDirective],
})
export class KKLIconModule {}
