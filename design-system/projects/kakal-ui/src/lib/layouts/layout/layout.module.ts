import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from "@angular/flex-layout";
import { KKLDirectivesModule } from "../../directives/directives.module";
import { KKLNavbarModule } from "../../navbar/navbar.module";

@NgModule({
    imports: [CommonModule, MatSidenavModule, FlexLayoutModule
        , KKLDirectivesModule, KKLNavbarModule],
    declarations: [LayoutComponent],
    exports: [LayoutComponent]
})

export class KKLLayoutModule { }
