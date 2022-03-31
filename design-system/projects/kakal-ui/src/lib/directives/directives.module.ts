import { NgModule } from '@angular/core';

import { VariantDirective } from './variant.directive';
import { SizeDirective } from './size.directive';
import { KKLButtonDirective } from './button.directive';
import { UnderlineDirective } from './underline.directive';
import { KKLBorderDirective } from './border.directive';
import { OutsideDirective } from './outside.directive';
import { WizardDirective } from './wizard.directive';
import { KKLOutsideButtonDirective } from './outside-button.directive';
import { KKLHoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    KKLHoverDirective,
    KKLBorderDirective,
    KKLButtonDirective,
    OutsideDirective,
    SizeDirective,
    UnderlineDirective,
    VariantDirective,
    WizardDirective,
    KKLOutsideButtonDirective,

  ],
  imports: [],
  exports: [
    KKLHoverDirective,
    KKLBorderDirective,
    KKLButtonDirective,
    OutsideDirective,
    SizeDirective,
    UnderlineDirective,
    VariantDirective,
    WizardDirective,
    KKLOutsideButtonDirective,
  ],
})
export class KKLDirectivesModule { }
