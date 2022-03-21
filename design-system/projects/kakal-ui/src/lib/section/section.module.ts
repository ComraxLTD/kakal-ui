import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { KKLTypographyModule } from "../typography/typography.module";
import { SectionComponent } from "./section.component";

@NgModule({
    imports: [CommonModule,FlexLayoutModule,KKLTypographyModule],
    declarations: [SectionComponent],
    exports: [SectionComponent]
})

export class KKSectionModule {

}
