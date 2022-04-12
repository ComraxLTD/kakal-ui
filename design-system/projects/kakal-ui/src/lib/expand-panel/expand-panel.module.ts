import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLIconModule } from '../icon/icon.module';
import { ExpandPanelComponent } from './expand-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { KKLButtonModule } from '../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatExpansionModule,
    KKLButtonModule,
    KKLIconModule,
  ],
  declarations: [ExpandPanelComponent],
  exports: [ExpandPanelComponent, MatExpansionModule],
})
export class KKLExpandPanelModule {}
