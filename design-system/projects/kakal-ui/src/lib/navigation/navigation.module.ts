import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { KKLIconModule } from '../icon/icon.module';
import { KKLPipesModule } from '../pipes/pipes.module';
import { KKLTypographyModule } from '../typography/typography.module';
import { KKLButtonModule } from '../button/button.module';
import { KKLDirectivesModule } from '../directives/directives.module';

import { NavigationComponent } from './navigation.component';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    KKLPipesModule,
    KKLDirectivesModule,
    KKLButtonModule,
    KKLTypographyModule,
    KKLIconModule,
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
})
export class KKLNavigationModule {}
