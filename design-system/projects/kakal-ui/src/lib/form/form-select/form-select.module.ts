import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { FormSelectComponent } from "./form-select.component";

@NgModule({
    imports:[CommonModule,MatFormFieldModule,MatSelectModule],
    declarations:[FormSelectComponent],
    exports:[FormSelectComponent]
})

export class FormSelectModule {}