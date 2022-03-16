import { NgModule } from "@angular/core";
import { DisplayDataComponent } from "./display-data.component";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLTypographyModule } from "../typography/typography.module";

@NgModule({
    imports: [CommonModule, FlexLayoutModule,KKLTypographyModule],
    declarations: [DisplayDataComponent],
    exports: [DisplayDataComponent]
})

export class KKLDisplayDataModule { }