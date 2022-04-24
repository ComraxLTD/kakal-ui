import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleGroupComponent } from './circle-group.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [CircleGroupComponent],
  imports: [CommonModule, FlexLayoutModule, MatDividerModule],
  exports: [CircleGroupComponent],
})
export class KKLCircleGroupModule {}
