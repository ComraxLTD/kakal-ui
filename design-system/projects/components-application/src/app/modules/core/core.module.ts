import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KakalUiModule, MaterialModule }from '../../../../../kakal-ui/src/public-api';

@NgModule({
  imports: [KakalUiModule, MaterialModule, FlexLayoutModule ,CommonModule],
  providers: [],
  exports: [KakalUiModule, MaterialModule, FlexLayoutModule],
})
export class CoreModule {}
