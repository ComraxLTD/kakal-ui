import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [PageComponent],
})
export class KKPageModule {}
