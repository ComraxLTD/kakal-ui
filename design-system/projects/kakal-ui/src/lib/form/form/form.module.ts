import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { KKLIconModule } from "../../icon/icon.module";
import { FormComponent } from './form.component';

@NgModule({
    declarations: [FormComponent],
    imports: [
        ReactiveFormsModule,
        MatMenuModule,
        MatListModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatInputModule,
        KKLIconModule,

    ],
    exports: [FormComponent]
})

export class KKLFormModule { }