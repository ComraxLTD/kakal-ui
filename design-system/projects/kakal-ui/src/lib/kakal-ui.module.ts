import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KakalUiComponent } from './kakal-ui.component';
import { ButtonComponent } from './button/button.component';
import { ButtonsetComponent } from './buttonset/buttonset.component';
import { AreaPipe } from './pipes/area.pipe';
import { FormatPipe } from './pipes/format.pipe';
import { LocationPipe } from './pipes/location.pipe';
import { PrefixPipe } from './pipes/prefix.pipe';
import { ButtonDirective } from './directives/button.directive';
import { CellDirective } from './directives/cell.directive';
import { OutsideDirective } from './directives/outside.directive';
import { WizardDirective } from './directives/wizard';

const exportPipes = [AreaPipe, FormatPipe, LocationPipe, PrefixPipe];
const exportDirective = [
  ButtonDirective,
  CellDirective,
  OutsideDirective,
  WizardDirective,
];

@NgModule({
  declarations: [
    KakalUiComponent,
    ButtonComponent,
    ButtonsetComponent,
    ...exportPipes,
    ...exportDirective,
  ],
  imports: [CommonModule],
  exports: [
    KakalUiComponent,
    ButtonComponent,
    ButtonsetComponent,
    ...exportPipes,
    ...exportDirective,
  ],
})
export class KakalUiModule {}
