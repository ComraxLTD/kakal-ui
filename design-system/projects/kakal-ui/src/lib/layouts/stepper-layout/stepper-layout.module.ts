import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { StepperLayoutComponent } from './stepper-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { KKLIconModule } from '../../icon/icon.module';
import { KKLStepperMobileModule } from '../../stepper-mobile/stepper-mobile.module';
import { KKLStepperModule } from '../../stepper/stepper.module';
import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLButtonModule } from '../../button/button.module';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatBadgeModule,
    KKLButtonModule,
    KKLIconModule,
    KKLTypographyModule,
    KKLStepperMobileModule,
    KKLStepperModule,
  ],
  declarations: [StepperLayoutComponent],
  exports: [StepperLayoutComponent],
})
export class StepperLayoutModule {}
