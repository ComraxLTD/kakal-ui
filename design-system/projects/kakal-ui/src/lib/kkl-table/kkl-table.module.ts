import { NgModule } from '@angular/core';
import { TableFormComponent } from './components/table-form/table-form.component';
import { LocalTableComponent } from './components/local-table/local-table.component';
import { EventTableComponent } from './components/event-table/event-table.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { TableCellPipe } from './pipes/table-cell-pipe.pipe';
import { TableGroupCellPipe } from './pipes/table-group-cell.pipe';
import { ArrIncludesPipe } from './pipes/arr-includes.pipe';
import { ArrIndexPipe } from './pipes/arr-index.pipe';
import { KklPaginatorService } from './services/kkl-paginator.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatMenuModule} from '@angular/material/menu';
import { KKLFormSelectModule } from '../form/form-select/form-select.module';
import { KKLFormCheckboxModule } from '../form/form-checkbox/form-checkbox.module';
import { KKLFormCurrencyModule } from '../form/form-currency/form-currency.module';
import { KKLFormDateModule } from '../form/form-date/form-date.module';
import { KKLFormInputModule } from '../form/form-input/form-input.module';
import { KKLFormUploadModule } from '../form/form-upload/form-upload.module';
import { KKLIconModule } from '../icon/icon.module';
import { KKLButtonModule } from '../button/button.module';
import { HttpClientModule } from '@angular/common/http';
import { StylePaginatorDirective } from './directives/kkl-paginator.directive';

@NgModule({
  declarations: [
    TableCellPipe,
    LocalTableComponent,
    EventTableComponent,
    TableGroupCellPipe,
    ArrIncludesPipe,
    ArrIndexPipe,
    TableFormComponent,
    TableCellComponent,
    // StylePaginatorDirective
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
    DragDropModule,
    MatMenuModule,
    HttpClientModule,
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
    EventTableComponent,
    TableGroupCellPipe,
    ArrIncludesPipe,
    ArrIndexPipe,
    TableFormComponent,
    TableCellComponent,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: KklPaginatorService}]
})
export class KKLNewTableModule { }
