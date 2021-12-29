import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KakalUiComponent } from './kakal-ui.component';
import { ButtonComponent } from './button/button.component';
import { ButtonsetComponent } from './buttonset/buttonset.component';
import { DvirComponent } from './dvir/dvir.component';


@NgModule({
  declarations: [KakalUiComponent, ButtonComponent, ButtonsetComponent, DvirComponent],
  imports: [
    CommonModule
  ],
  exports: [KakalUiComponent, ButtonComponent, ButtonsetComponent]
})
export class KakalUiModule { }
