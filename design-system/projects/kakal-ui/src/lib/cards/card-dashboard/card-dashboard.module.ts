import { NgModule } from "@angular/core";
import { KKLIconModule } from "../../icon/icon.module";
import { KKLTypographyModule } from "../../typography/typography.module";
import { CardDashboardComponent } from './card-dashboard.component';

@NgModule({
    imports: [KKLIconModule,KKLTypographyModule],
    declarations: [CardDashboardComponent],
    exports: [CardDashboardComponent]
})

export class KKLCardDashboardModule { }