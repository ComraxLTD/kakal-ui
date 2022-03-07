import { NgModule } from '@angular/core';
import { StepperComponent } from './stepper.component';
import {KKLDirectivesModule} from '../directives/directives.module';

@NgModule({
    imports:[KKLDirectivesModule],
    declarations:[StepperComponent],
    exports:[StepperComponent]
})

export class StepperModule {}