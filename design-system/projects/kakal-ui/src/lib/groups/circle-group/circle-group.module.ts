import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';

import {KKLButtonModule} from '../../button/button.module'

import { CircleGroupComponent } from './circle-group.component';
@NgModule({
  declarations: [CircleGroupComponent],
  imports: [CommonModule, FlexLayoutModule, MatDividerModule, KKLButtonModule],
  exports: [CircleGroupComponent],
})
export class KKLCircleGroupModule {}
