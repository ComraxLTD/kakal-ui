import { NgModule } from '@angular/core';
import { StepperComponent } from './stepper.component';
import {KKLDirectivesModule} from '../directives/directives.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[KKLDirectivesModule,FlexLayoutModule,CommonModule],
    declarations:[StepperComponent],
    exports:[StepperComponent]
})

export class StepperModule {}