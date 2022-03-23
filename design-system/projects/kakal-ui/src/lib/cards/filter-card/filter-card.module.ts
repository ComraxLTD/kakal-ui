import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { KKLDirectivesModule } from "../../directives/directives.module";
import { KKLIconModule } from "../../icon/icon.module";
import { FilterCardComponent } from './filter-card.component';

@NgModule({
    imports: [KKLIconModule,KKLDirectivesModule,CommonModule],
    declarations: [FilterCardComponent],
    exports: [FilterCardComponent]
})

export class KKLFilterCardModule { }