import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLTypographyModule } from '../../typography/typography.module';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, KKLTypographyModule, FlexLayoutModule],
  exports: [PageComponent],
})
export class KKPageModule {}
