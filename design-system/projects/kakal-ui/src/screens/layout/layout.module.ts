import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from "@angular/flex-layout";
import { KKLNavbarModule } from '../../lib/navbar/navbar.module';
import { KKLDirectivesModule } from '../../lib/directives/directives.module';
import { NavbarMenuModule } from '../../lib/navbar-menu/navbar-menu.module';

@NgModule({
    imports: [CommonModule, MatSidenavModule, FlexLayoutModule, NavbarMenuModule
        , KKLDirectivesModule, KKLNavbarModule],
    declarations: [LayoutComponent],
    exports: [LayoutComponent]
})

export class KKLLayoutModule { }