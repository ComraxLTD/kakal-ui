import { NgModule } from "@angular/core";
import { TabsComponent } from "./tabs.component";
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    imports: [CommonModule, FlexLayoutModule, MatTabsModule],
    declarations: [TabsComponent],
    exports: [TabsComponent]
})

export class KKLTabsModule { }