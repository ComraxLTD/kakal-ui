import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionLayoutComponent } from './accordion-layout.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { KKLButtonModule } from '../../button/button.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AccordionLayoutComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCheckboxModule,
    FlexLayoutModule,
    KKLButtonModule
  ],
  exports: [AccordionLayoutComponent]
})
export class KKLAccordionLayoutModule { }
