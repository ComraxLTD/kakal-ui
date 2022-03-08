import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { KKLDirectivesModule } from "../../directives/directives.module";
import { KKLTypographyModule } from "../../typography/typography.module";

@NgModule({
    imports:[MatCardModule,KKLTypographyModule,KKLDirectivesModule],
    declarations:[],
    exports:[]
})

export class KKLCardInfoModule {}