import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KakalUiModule, MaterialModule } from '../../../../../../../../../kakal-ui/src/public-api';
import { CircleStepsComponent } from 'src/app/components/shared/circle-steps/circle-steps.component';
import { HorizontalTabsComponent } from 'src/app/components/shared/horizontal-tabs/horizontal-tabs.component';

@NgModule({
  imports: [KakalUiModule, MaterialModule, FlexLayoutModule ,CommonModule],
  declarations:[HorizontalTabsComponent,CircleStepsComponent],
  providers: [],
  exports: [KakalUiModule, MaterialModule, FlexLayoutModule,HorizontalTabsComponent,CircleStepsComponent],
})
export class CoreModule {}
