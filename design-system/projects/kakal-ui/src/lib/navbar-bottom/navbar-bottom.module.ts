import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { KKLDirectivesModule } from "../directives/directives.module";
import { KKLIconModule } from "../icon/icon.module";
import { NavbarBottomComponent } from "./navbar-bottom.component";

@NgModule({
    imports:[KKLIconModule,KKLDirectivesModule,MatToolbarModule],
    declarations:[NavbarBottomComponent],
    exports:[NavbarBottomComponent]
})

export class NavbarBottomModule {}