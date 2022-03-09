import { NgModule } from "@angular/core";
import { KKLIconModule } from "../../icon/icon.module";
import { KKLTypographyModule } from "../../typography/typography.module";
import { CardDashboardComponent } from './card-dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [KKLIconModule,KKLTypographyModule,FlexLayoutModule],
    declarations: [CardDashboardComponent],
    exports: [CardDashboardComponent]
})

export class KKLCardDashboardModule { }