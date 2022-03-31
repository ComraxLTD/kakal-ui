import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLTypographyModule } from '../typography/typography.module';
import { KKLIconModule } from '../icon/icon.module';
import { PageHeadlineComponent } from './page-headline.component';
import { KKLPipesModule } from '../pipes/pipes.module';
@NgModule({
  declarations: [PageHeadlineComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    KKLTypographyModule,
    KKLPipesModule,
    KKLIconModule,
  ],
  exports: [PageHeadlineComponent],
})
export class KKLPageHeadlineModule {}
