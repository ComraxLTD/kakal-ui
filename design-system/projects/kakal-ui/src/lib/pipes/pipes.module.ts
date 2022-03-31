import { NgModule } from '@angular/core';
import { AreaPipe } from './area.pipe';
import { FormatPipe } from './format.pipe';
import { LocationPipe } from './location.pipe';
import { PrefixPipe } from './prefix.pipe';
import { RangePipe } from './range.pipe';
import { PluckPipe } from './pluck.pipe';

@NgModule({
  declarations: [
    AreaPipe,
    FormatPipe,
    LocationPipe,
    PrefixPipe,
    RangePipe,
    PluckPipe,
  ],
  imports: [],
  providers: [
    AreaPipe,
    FormatPipe,
    LocationPipe,
    PrefixPipe,
    RangePipe,
    PluckPipe,
  ],
  exports: [
    AreaPipe,
    FormatPipe,
    LocationPipe,
    PrefixPipe,
    RangePipe,
    PluckPipe,
  ],
})
export class KKLPipesModule {}
