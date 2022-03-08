import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { KKLDirectivesModule } from "../directives/directives.module";
import { KKLIconModule } from "../icon/icon.module";
import { KKLTypographyModule } from "../typography/typography.module";
import { NavbarComponent } from "./navbar.component";

@NgModule({
    imports:[MatToolbarModule,KKLTypographyModule,KKLDirectivesModule,CommonModule,KKLIconModule,MatIconModule],
    declarations:[NavbarComponent],
    exports:[NavbarComponent]
})

export class KKLNavbarModule {}