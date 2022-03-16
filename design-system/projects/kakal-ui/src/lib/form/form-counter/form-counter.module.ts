import { NgModule } from "@angular/core";
import { KKLFormCounterComponent } from "./form-counter.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { KKLIconModule } from "../../icon/icon.module";
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { KKLTypographyModule } from "../../typography/typography.module";
import { KKLDirectivesModule } from "../../directives/directives.module";

@NgModule({
    imports: [FlexLayoutModule, KKLIconModule, KKLTypographyModule, KKLDirectivesModule
        , MatInputModule, CommonModule,  ReactiveFormsModule],
    declarations: [KKLFormCounterComponent],
    exports: [KKLFormCounterComponent]
})

export class KKLFormCounterModule { }