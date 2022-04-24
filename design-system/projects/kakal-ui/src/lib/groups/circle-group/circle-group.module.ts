import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleGroupComponent } from './circle-group.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [CircleGroupComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [CircleGroupComponent],
})
export class KKLCircleGroupModule {}
