import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {NavigationComponent} from './navigation.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MaterialModule} from '../angular-material/material.module'
import {KKLIconModule} from '../icon/icon.module'

@NgModule({
    imports:[
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        KKLIconModule
    ],
    declarations:[NavigationComponent],
    exports:[NavigationComponent]
})

export class KKLNavigationModule{}