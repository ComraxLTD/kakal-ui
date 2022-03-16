import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import {  MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxCleaveDirectiveModule } from "ngx-cleave-directive";
import { FormDateComponent } from "./form-date.component";

@NgModule({
    imports:[
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        NgxCleaveDirectiveModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatInputModule,
    ],
    declarations:[FormDateComponent],
    exports:[FormDateComponent]
})

export class KKLFormDateModule {}
