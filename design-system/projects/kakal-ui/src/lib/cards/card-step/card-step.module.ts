import { NgModule } from "@angular/core";
import { CardStepComponent } from './card-step.component';
import { MatCardModule } from '@angular/material/card';
import { KKLTypographyModule } from "../../typography/typography.module";
import { CommonModule } from "@angular/common";
import { KKLDirectivesModule } from "../../directives/directives.module";
import {MatBadgeModule} from '@angular/material/badge';
import { KKLIconModule } from "../../icon/icon.module";

@NgModule({
    imports: [MatCardModule,KKLTypographyModule,CommonModule,KKLDirectivesModule,MatBadgeModule,KKLIconModule],
    declarations: [CardStepComponent],
    exports: [CardStepComponent]
})

export class KKLCardStepModule { }