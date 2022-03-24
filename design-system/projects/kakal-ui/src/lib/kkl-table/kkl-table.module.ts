import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TableFormComponent } from './components/table-form/table-form.component';
import { TableEditComponent } from './components/table-edit/table-edit.component';
import { TableCellPipe } from './pipes/table-cell-pipe.pipe';
import { TableGroupCellPipe } from './pipes/table-group-cell.pipe';
import { ArrIncludesPipe } from './pipes/arr-includes.pipe';
import { ArrIndexPipe } from './pipes/arr-index.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    TableCellPipe,
    TableEditComponent,
    TableGroupCellPipe,
    ArrIncludesPipe,
    ArrIndexPipe,
    TableFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
  ],
  exports: [
    TableCellPipe,
    TableEditComponent,
    TableGroupCellPipe,
    ArrIncludesPipe,
    ArrIndexPipe,
    TableFormComponent,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
  ]
})
export class KKLNewTableModule { }
