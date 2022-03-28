import { NgModule } from '@angular/core';
import { TableFormComponent } from './components/table-form/table-form.component';
import { LocalTableComponent } from './components/local-table/local-table.component';
import { ServerTableComponent } from './components/server-table/server-table.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { TableCellPipe } from './pipes/table-cell-pipe.pipe';
import { TableGroupCellPipe } from './pipes/table-group-cell.pipe';
import { ArrIncludesPipe } from './pipes/arr-includes.pipe';
import { ArrIndexPipe } from './pipes/arr-index.pipe';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';


import { KKLFormSelectModule } from '../form/form-select/form-select.module';
import { KKLFormCheckboxModule } from '../form/form-checkbox/form-checkbox.module';
import { KKLFormCurrencyModule } from '../form/form-currency/form-currency.module';
import { KKLFormDateModule } from '../form/form-date/form-date.module';
import { KKLFormInputModule } from '../form/form-input/form-input.module';
import { KKLFormUploadModule } from '../form/form-upload/form-upload.module';
import { KKLIconModule } from '../icon/icon.module';
import { KKLButtonModule } from '../button/button.module';

@NgModule({
  declarations: [
    TableCellPipe,
    LocalTableComponent,
    ServerTableComponent,
    TableGroupCellPipe,
    ArrIncludesPipe,
    ArrIndexPipe,
    TableFormComponent,
    TableCellComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressBarModule,
    KKLFormSelectModule,
    KKLFormDateModule,
    KKLFormInputModule,
    KKLFormUploadModule,
    KKLFormCurrencyModule,
    KKLFormCheckboxModule,
    KKLIconModule,
    KKLButtonModule
  ],
  exports: [
    TableCellPipe,
    LocalTableComponent,
    ServerTableComponent,
    TableGroupCellPipe,
    ArrIncludesPipe,
    ArrIndexPipe,
    TableFormComponent,
    TableCellComponent,
  ]
})
export class KKLNewTableModule { }
