import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NgxCleaveDirectiveModule } from "ngx-cleave-directive";
import { KKLFormDateRangeModule } from "../form-date-range/form-date-range.module";
import { FormDateCalendarComponent } from "./form-date-calendar.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        NgxCleaveDirectiveModule ,
        MatNativeDateModule,
        MatDatepickerModule,
        MatInputModule,
        KKLFormDateRangeModule,
    ],
    declarations: [FormDateCalendarComponent],
    exports: [FormDateCalendarComponent]
})

export class KKLFormDateCalendarModule {}
