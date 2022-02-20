import { NgModule } from '@angular/core';

import { VariantDirective } from './variant.directive';
import { SizeDirective } from './size.directive';
import { ButtonDirective } from './button.directive';
import { UnderlineDirective } from './underline.directive';
import { BorderDirective } from './border.directive';
import { OutsideDirective } from './outside.directive';
import { CellDirective } from './cell.directive';
import { WizardDirective } from './wizard.directive';
import { ActionButtonDirective } from './action-button.directive';
import { FormButtonDirective } from './form-button.directive';
import { OutsideButtonDirective } from './outside-button.directive';

const directives = [
  BorderDirective,
  ButtonDirective,
  CellDirective,
  OutsideDirective,
  SizeDirective,
  UnderlineDirective,
  VariantDirective,
  WizardDirective,
  ActionButtonDirective,
  FormButtonDirective,
  OutsideButtonDirective,
];

@NgModule({
  declarations: [...directives],
  imports: [],
  exports: [...directives],
})
export class DirectivesModule {}
