import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { KKLBreadCrumbsModule } from "../bread-crumbs/bread-crumbs.module";
import { KKLDirectivesModule } from "../directives/directives.module";
import { KKLIconModule } from "../icon/icon.module";
import { KKLPageHeadlineModule } from "../page-headline/page-headline.module";
import { KKLTypographyModule } from "../typography/typography.module";
import { NavbarComponent } from "./navbar.component";

@NgModule({
    imports:[MatToolbarModule,KKLTypographyModule,KKLDirectivesModule
        ,CommonModule,KKLIconModule,MatIconModule,FlexLayoutModule,KKLBreadCrumbsModule,KKLPageHeadlineModule],
    declarations:[NavbarComponent],
    exports:[NavbarComponent]
})

export class KKLNavbarModule {}