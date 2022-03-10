import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule } from "@angular/material/sidenav";
import { StepperLayoutComponent } from "./stepper-layout.component";
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { CommonModule } from "@angular/common";
import { KKLIconModule, KKLTypographyModule, StepperMobileModule, StepperModule } from "../../public-api";
import { MatBadgeModule } from "@angular/material/badge";

@NgModule({
    imports:[MatSidenavModule,FlexLayoutModule,MatToolbarModule,CommonModule,StepperModule,StepperMobileModule,KKLIconModule,MatBadgeModule,KKLTypographyModule],
    declarations:[StepperLayoutComponent],
    exports:[StepperLayoutComponent]
})

export class StepperLayoutModule {}