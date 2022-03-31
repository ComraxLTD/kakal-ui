import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { StepperLayoutComponent } from './stepper-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { KKLIconModule } from '../../icon/icon.module';
import { StepperMobileModule } from '../../stepper-mobile/stepper-mobile.module';
import { StepperModule } from '../../stepper/stepper.module';
import { KKLTypographyModule } from '../../typography/typography.module';
@NgModule({
  imports: [
    MatSidenavModule,
    FlexLayoutModule,
    MatToolbarModule,
    CommonModule,
    StepperModule,
    StepperMobileModule,
    KKLIconModule,
    MatBadgeModule,
    KKLTypographyModule,
  ],
  declarations: [StepperLayoutComponent],
  exports: [StepperLayoutComponent],
})
export class StepperLayoutModule {}
