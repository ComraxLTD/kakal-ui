import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { KKLDirectivesModule } from "../directives/directives.module";
import { KKLIconModule } from "../icon/icon.module";
import { StepperMobileComponent } from './stepper-mobile.component';

@NgModule({
    imports:[CommonModule,KKLDirectivesModule,FlexLayoutModule,KKLIconModule],
    declarations: [StepperMobileComponent],
    exports: [StepperMobileComponent]
})

export class KKLStepperMobileModule { }
