import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormInputComponent } from './form-input.component';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';

@NgModule({
    imports: [CommonModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule, ReactiveFormsModule, NgxCleaveDirectiveModule],
    declarations: [FormInputComponent],
    exports: [FormInputComponent]
})

export class FormInputModule { }