import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KKLMenuItemModule } from '../menu-item/menu-item.module';
import { MenuComponent } from './menu.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    KKLMenuItemModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatListModule
  ]
})
export class KKLMenuModule { }
