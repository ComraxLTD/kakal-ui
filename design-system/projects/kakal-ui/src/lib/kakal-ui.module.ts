import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KakalUiComponent } from './kakal-ui.component';
import { ButtonComponent } from './button/button.component';
import { ButtonsetComponent } from './buttonset/buttonset.component';

const exportPipes = [];
const exportDirective = [
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
