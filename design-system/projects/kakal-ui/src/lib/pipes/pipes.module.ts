import { NgModule } from '@angular/core';
import { AreaPipe } from './area.pipe';
import { FormatPipe } from './format.pipe';
import { LocationPipe } from './location.pipe';
import { PrefixPipe } from './prefix.pipe';
import { RangePipe } from './range.pipe';

@NgModule({
  declarations: [AreaPipe, FormatPipe, LocationPipe, PrefixPipe, RangePipe],
  imports: [],
  providers : [AreaPipe, FormatPipe, LocationPipe, PrefixPipe, RangePipe],
  exports: [AreaPipe, FormatPipe, LocationPipe, PrefixPipe, RangePipe],
})
export class KKLPipesModule {}
