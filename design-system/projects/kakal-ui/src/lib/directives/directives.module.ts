import { NgModule } from '@angular/core';

import { VariantDirective } from './variant.directive';
import { SizeDirective } from './size.directive';
import { KKLButtonDirective } from './button.directive';
import { UnderlineDirective } from './underline.directive';
import { BorderDirective } from './border.directive';
import { OutsideDirective } from './outside.directive';
import { CellDirective } from './cell.directive';
import { WizardDirective } from './wizard.directive';
import { ActionKKLButtonDirective } from './action-button.directive';
import { FormKKLButtonDirective } from './form-button.directive';
import { OutsideKKLButtonDirective } from './outside-button.directive';


@NgModule({
  declarations: [
    BorderDirective,
    KKLButtonDirective,
    CellDirective,
    OutsideDirective,
    SizeDirective,
    UnderlineDirective,
    VariantDirective,
    WizardDirective,
    ActionKKLButtonDirective,
    FormKKLButtonDirective,
    OutsideKKLButtonDirective,
  ],
  imports: [],
  exports: [
    BorderDirective,
    KKLButtonDirective,
    CellDirective,
    OutsideDirective,
    SizeDirective,
    UnderlineDirective,
    VariantDirective,
    WizardDirective,
    ActionKKLButtonDirective,
    FormKKLButtonDirective,
    OutsideKKLButtonDirective,
  ],
})
export class KKLDirectivesModule {}
