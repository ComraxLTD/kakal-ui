import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MaterialModule} from '../angular-material/material.module'
import {KKLIconModule} from '../icon/icon.module'
import { ExpandPanelComponent } from "./expand-panel.component";

@NgModule({
    imports:[
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        KKLIconModule
    ],
    declarations:[ExpandPanelComponent],
    exports:[ExpandPanelComponent]
})

export class KKLExpandPanelModule{}
