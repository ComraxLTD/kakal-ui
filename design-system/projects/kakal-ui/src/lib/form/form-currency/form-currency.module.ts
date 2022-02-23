import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormCurrencyComponent } from "./form-currency.component";
import { CurrencyService } from "./form-currency.service";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormInputModule } from "../form-input/form-input.module";
import {KKLIconModule} from '../../icon/icon.module';
import {MatSelectModule} from '@angular/material/select';

@NgModule({ 
    imports:[
        CommonModule,
        FlexLayoutModule,
        FormInputModule,
        KKLIconModule,
        MatSelectModule
    ],
    providers:[CurrencyService,FormBuilder],
    declarations:[FormCurrencyComponent],
    exports:[FormCurrencyComponent]
})

export class CurrencyModule {}