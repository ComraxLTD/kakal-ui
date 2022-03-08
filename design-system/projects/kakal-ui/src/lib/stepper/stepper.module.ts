import { NgModule } from '@angular/core';
import { StepperComponent } from './stepper.component';
import {KKLDirectivesModule} from '../directives/directives.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports:[KKLDirectivesModule,FlexLayoutModule],
    declarations:[StepperComponent],
    exports:[StepperComponent]
})

export class StepperModule {}