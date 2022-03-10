import { NgModule } from "@angular/core";
import { KKLListMenuComponent } from "./list-menu.component";
import { MatMenuModule } from '@angular/material/menu';
import { KKLIconModule } from "../icon/icon.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    imports: [MatMenuModule, KKLIconModule,BrowserAnimationsModule,MatButtonModule,MatIconModule],
    declarations: [KKLListMenuComponent],
    exports: [KKLListMenuComponent]
})

export class KKLListMenuModule { }