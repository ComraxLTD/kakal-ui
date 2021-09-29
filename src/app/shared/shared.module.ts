import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusCardComponent } from './components/status-card/status-card.component';
import { TypographyComponent } from './components/typography/typography.component';
import { IconComponent } from './components/icon/icon.component';
import { MaterialModule } from 'src/material/material.module';
import { IconCardComponent } from './components/icon-card/icon-card.component';



@NgModule({
  declarations: [
    StatusCardComponent,
    TypographyComponent,
    IconComponent,
    IconCardComponent

  ],
  imports: [
    CommonModule,
    MaterialModule
  ], exports : [
    StatusCardComponent,
    TypographyComponent,
    IconComponent,
    IconCardComponent,
    MaterialModule
  ]
})
export class SharedModule { }
