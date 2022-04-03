import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { KKLPipesModule } from "../pipes/pipes.module";
import { KKLTypographyModule } from "../typography/typography.module";
import {FacilityCardComponent} from './facility-card.component';

@NgModule({
    imports:[CommonModule,FlexLayoutModule,KKLTypographyModule,KKLPipesModule],
    declarations:[FacilityCardComponent],
    exports:[FacilityCardComponent]
})

export class FacilityCardModule {}