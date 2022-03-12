import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule } from "@angular/material/sidenav";
import { StepperLayoutComponent } from "./stepper-layout.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from "@angular/common";
import { MatBadgeModule } from "@angular/material/badge";
import { StepperModule } from '../../lib/stepper/stepper.module';
import { StepperMobileModule } from '../../lib/stepper-mobile/stepper-mobile.module';
import { KKLIconModule } from '../../lib/icon/icon.module';
import { KKLTypographyModule } from '../../lib/typography/typography.module';

@NgModule({
    imports: [MatSidenavModule, FlexLayoutModule, MatToolbarModule, CommonModule, StepperModule, StepperMobileModule, KKLIconModule, MatBadgeModule, KKLTypographyModule],
    declarations: [StepperLayoutComponent],
    exports: [StepperLayoutComponent]
})

export class StepperLayoutModule { }