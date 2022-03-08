import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule } from "@angular/material/sidenav";
import { StepperLayoutComponent } from "./stepper-layout.component";
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[MatSidenavModule,FlexLayoutModule,MatToolbarModule,CommonModule],
    declarations:[StepperLayoutComponent],
    exports:[StepperLayoutComponent]
})

export class StepperLayoutModule {}