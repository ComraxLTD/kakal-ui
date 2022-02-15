import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../angular-material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';

// import { FormatPipe } from '../shared/pipes/format.pipe';
// import { RangePipe } from '../shared/pipes/range.pipe';

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
    // FormatPipe,
    // RangePipe,

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
