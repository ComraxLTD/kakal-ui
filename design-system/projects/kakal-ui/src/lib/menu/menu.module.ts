import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemModule } from '../menu-item/menu-item.module';
import { MenuComponent } from './menu.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuItemModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatListModule
  ]
})
export class MenuModule { }
