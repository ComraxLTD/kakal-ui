import { NgModule } from '@angular/core';

import { KKLPageHeadlineModule } from '../../page-headline/page-headline.module';
import { KKLStatusStepsModule } from '../../status-bars/status-bars.module';
import { CommonModule } from '@angular/common';
import { PageHeadlineExampleComponent } from './page-headline-example.component';

@NgModule({
  imports: [KKLPageHeadlineModule, CommonModule,KKLStatusStepsModule],
  declarations: [PageHeadlineExampleComponent],
  exports: [PageHeadlineExampleComponent],
})
export class KKLPageHeadlineExampleModule {}
