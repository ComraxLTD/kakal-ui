import { NgModule } from '@angular/core';

import { KKLPageHeadlineModule } from '../../page-headline/page-headline.module';
import { CommonModule } from '@angular/common';
import { PageHeadlineExampleComponent } from './page-headline-example.component';

@NgModule({
  // imports: [KKLPageHeadlineModule, CommonModule,KKLStatusStepsModule],
  imports: [KKLPageHeadlineModule, CommonModule],
  declarations: [PageHeadlineExampleComponent],
  exports: [PageHeadlineExampleComponent],
})
export class KKLPageHeadlineExampleModule {}
