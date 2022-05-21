import { NgModule } from '@angular/core';

import { VariantDirective } from './variant.directive';
import { SizeDirective } from './size.directive';
import { UnderlineDirective } from './underline.directive';
import { KKLBorderDirective } from './border.directive';
import { OutsideDirective } from './outside.directive';
import { WizardDirective } from './wizard.directive';
import { KKLOutsideButtonDirective } from './outside-button.directive';
import { KKLHoverDirective } from './hover.directive';
import { ResizedDirective } from './resized.directive';
import { NextNavigationDirective } from './next-navigation.directive';
@NgModule({
  declarations: [
    KKLHoverDirective,
    KKLBorderDirective,
    OutsideDirective,
    SizeDirective,
    UnderlineDirective,
    VariantDirective,
    WizardDirective,
    KKLOutsideButtonDirective,
    ResizedDirective,
    NextNavigationDirective
  ],
  exports: [
    KKLHoverDirective,
    KKLBorderDirective,
    OutsideDirective,
    SizeDirective,
    UnderlineDirective,
    VariantDirective,
    WizardDirective,
    KKLOutsideButtonDirective,
    ResizedDirective,
    NextNavigationDirective
  ],
})
export class KKLDirectivesModule { }
