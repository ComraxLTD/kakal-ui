import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { KKLDirectivesModule } from "../directives/directives.module";
import { KKLIconModule } from "../icon/icon.module";
import { NavbarBottomComponent } from "./navbar-bottom.component";
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    imports: [KKLIconModule, KKLDirectivesModule, FlexLayoutModule
        , MatToolbarModule, CommonModule, MatButtonModule],
    declarations: [NavbarBottomComponent],
    exports: [NavbarBottomComponent]
})

export class NavbarBottomModule { }