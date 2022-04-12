import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { KKLCardDocumentModule } from '../../cards/card-document/card-document.module';
import { DocumentGridComponent } from './document-grid.component';

@NgModule({
  declarations: [DocumentGridComponent],
  imports: [CommonModule, MatGridListModule, KKLCardDocumentModule],
  exports: [DocumentGridComponent, KKLCardDocumentModule],
})
export class KKLDocumentGridModule {}
