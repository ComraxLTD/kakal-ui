import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KKLDirectivesModule } from "../directives/directives.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { OpenMotionsComponent } from "./open-motions.component";
import { KKLIconModule } from "../icon/icon.module";

@NgModule({
    imports: [CommonModule,KKLDirectivesModule,FlexLayoutModule,KKLIconModule],
    declarations: [OpenMotionsComponent],
    exports: [OpenMotionsComponent]
})

export class OpenMotionsModule {

}
