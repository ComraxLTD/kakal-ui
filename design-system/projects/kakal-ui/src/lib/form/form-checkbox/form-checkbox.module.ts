import { NgModule } from "@angular/core";
import { FormCheckboxComponent } from './form-checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatListModule } from "@angular/material/list";

@NgModule({
    imports: [MatCheckboxModule,ReactiveFormsModule,FlexLayoutModule,MatListModule],
    declarations: [FormCheckboxComponent],
    exports: [FormCheckboxComponent]
})

export class KKLFormCheckboxModule { }
