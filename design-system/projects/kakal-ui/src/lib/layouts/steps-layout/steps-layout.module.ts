import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';

import { KKLIconModule } from '../../icon/icon.module';
import { KKLStepperMobileModule } from '../../stepper-mobile/stepper-mobile.module';
import { KKLStepperModule } from '../../stepper/stepper.module';
import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLButtonModule } from '../../button/button.module';
import { KKLStepGroupModule } from '../../groups/step-group/step-group.module';

import { StepsLayoutComponent } from './steps-layout.component';

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
    KKLStepGroupModule
  ],
  declarations: [StepsLayoutComponent],
  exports: [StepsLayoutComponent],
})
export class KKLStepsLayoutModule {}
