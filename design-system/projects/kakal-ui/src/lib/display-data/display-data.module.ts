import { NgModule } from '@angular/core';
import { DisplayDataComponent } from './display-data.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLTypographyModule } from '../typography/typography.module';
import { KKLIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [DisplayDataComponent],
  imports: [CommonModule, FlexLayoutModule, KKLTypographyModule, KKLIconModule],
  exports: [DisplayDataComponent],
})
export class KKLDisplayDataModule {}
