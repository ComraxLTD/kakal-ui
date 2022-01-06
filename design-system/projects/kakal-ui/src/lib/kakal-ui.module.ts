import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KakalUiComponent } from './kakal-ui.component';
import { ButtonComponent } from './button/button.component';
import { ButtonsetComponent } from './buttonset/buttonset.component';


@NgModule({
  declarations: [KakalUiComponent, ButtonComponent, ButtonsetComponent],
  imports: [
    CommonModule
  ],
  exports: [KakalUiComponent, ButtonComponent, ButtonsetComponent]
})
export class KakalUiModule { }
