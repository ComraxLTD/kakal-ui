import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';

import { KKLIconModule } from '../../icon/icon.module';
import { KKLStepperMobileModule } from '../../stepper-mobile/stepper-mobile.module';
import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLButtonModule } from '../../button/button.module';
import { KKLStepGroupModule } from '../../groups/step-group/step-group.module';
import { KKLDrawerLayoutModule } from '../drawer-layout/drawer-layout.module';

import { StepsLayoutComponent } from './steps-layout.component';
import { KKLNavigationModule } from '../../navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatBadgeModule,
    KKLDrawerLayoutModule,
    KKLButtonModule,
    KKLIconModule,
    KKLTypographyModule,
    KKLStepperMobileModule,
    KKLStepGroupModule,
    KKLNavigationModule,
  ],
  declarations: [StepsLayoutComponent],
  exports: [StepsLayoutComponent],
})
export class KKLStepsLayoutModule {}
