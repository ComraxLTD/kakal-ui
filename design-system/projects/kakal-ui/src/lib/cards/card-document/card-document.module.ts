import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLButtonModule } from '../../button/button.module';
import { KKLIconModule } from '../../icon/icon.module';
import { KKLTypographyModule } from '../../typography/typography.module';

import { CardDocumentComponent } from './card-document.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    KKLIconModule,
    KKLButtonModule,
    KKLTypographyModule,
  ],
  declarations: [CardDocumentComponent],
  exports: [CardDocumentComponent],
})
export class KKLCardDocumentModule {}
