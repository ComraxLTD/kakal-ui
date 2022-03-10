import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { KKLHoverComponent } from "./kkl-hover.component";

@NgModule({
    imports:[CommonModule],
    declarations:[KKLHoverComponent],
    exports:[KKLHoverComponent]
})

export class KKLHoverModule {}