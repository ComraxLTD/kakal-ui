import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusCardComponent } from './components/status-card/status-card.component';
import { TypographyComponent } from './components/typography/typography.component';
import { MaterialModule } from 'src/material/material.module';



@NgModule({
  declarations: [
    StatusCardComponent,
    TypographyComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule
  ], exports : [
    StatusCardComponent,
    TypographyComponent,
  ]
})
export class SharedModule { }
