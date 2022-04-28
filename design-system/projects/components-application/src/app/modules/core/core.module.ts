import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KakalUiModule, MaterialModule } from '../../../../../kakal-ui/src/public-api';
import {HorizontalTabsComponent} from '../../components/shared/horizontal-tabs/horizontal-tabs.component'
import {CircleStepsComponent} from '../../components/shared/circle-steps/circle-steps.component'
@NgModule({
  imports: [KakalUiModule, MaterialModule, FlexLayoutModule ,CommonModule],
  declarations:[HorizontalTabsComponent,CircleStepsComponent],
  providers: [],
  exports: [KakalUiModule, MaterialModule, FlexLayoutModule,HorizontalTabsComponent,CircleStepsComponent],
})
export class CoreModule {}
