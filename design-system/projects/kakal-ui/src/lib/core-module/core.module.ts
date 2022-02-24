import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../angular-material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    NgxPaginationModule,
    NgxCleaveDirectiveModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    NgxPaginationModule,
    NgxCleaveDirectiveModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class CoreModule {}
