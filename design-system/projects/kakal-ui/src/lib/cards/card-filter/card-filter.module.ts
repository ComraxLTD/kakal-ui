import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { KKLDirectivesModule } from "../../directives/directives.module";
import { KKLIconModule } from "../../icon/icon.module";
import { CardFilterComponent } from './card-filter.component';

@NgModule({
    imports: [KKLIconModule,KKLDirectivesModule,CommonModule],
    declarations: [CardFilterComponent],
    exports: [CardFilterComponent]
})

export class KKLCardFilterModule { }
