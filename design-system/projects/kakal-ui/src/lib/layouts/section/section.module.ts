import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SectionComponent } from './section.component';
import { KKLTypographyModule } from '../../typography/typography.module';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, KKLTypographyModule],
  declarations: [SectionComponent],
  exports: [SectionComponent],
})
export class KKSectionModule {}
