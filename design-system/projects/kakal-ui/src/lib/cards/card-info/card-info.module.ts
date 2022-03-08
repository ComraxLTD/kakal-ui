import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { KKLDirectivesModule } from "../../directives/directives.module";
import { KKLTypographyModule } from "../../typography/typography.module";
import { CardInfoComponent } from "./card-info.component";

@NgModule({
    imports:[MatCardModule,KKLTypographyModule,KKLDirectivesModule],
    declarations:[CardInfoComponent],
    exports:[CardInfoComponent]
})

export class KKLCardInfoModule {}