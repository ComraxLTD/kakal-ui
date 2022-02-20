import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@angular/flex-layout';
import { UnderlineDirective } from '../../directives/underline.directive';
import { KKLTypographyModule } from '../typography/typography.module';
import { TitleComponent } from './kkl-title.component';

@NgModule({
  declarations: [TitleComponent],
  imports: [UnderlineDirective, KKLTypographyModule,CommonModule,CoreModule],
})
export class KklTitleModule {}
