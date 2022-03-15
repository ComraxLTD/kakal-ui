import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { KKLCardDashboardModule } from "../cards/card-dashboard/card-dashboard.module";
import { KKLTypographyModule } from "../typography/typography.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    imports: [KKLTypographyModule, FlexLayoutModule, CommonModule, KKLCardDashboardModule],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})

export class KKLDashboarModule { }