import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { KKLIconModule } from '../icon/icon.module';
import { KKLButtonModule } from '../button/button.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MeiFormModule } from '../mei-form/mei-form.module';
import { MeiServiceModule } from '../mei-services/mei-services.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { KKLDirectivesModule } from '../directives/directives.module';
import { NgxLocalTableComponent } from './components/local-table/local-table.component';
import { KKLNewTableModule } from '../kkl-table/kkl-table.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxTableFormComponent } from './components/table-form/table-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { NgxDatatableDefaultDirective } from './directives/default.directive';
import { KKLNgxPaginatorDirective } from './directives/pagination.directive';
@NgModule({
  declarations: [
    NgxLocalTableComponent,
    NgxTableFormComponent,
    NgxDatatableDefaultDirective,
    KKLNgxPaginatorDirective
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
    KKLIconModule,
    KKLButtonModule,
    FlexLayoutModule,
    MatTooltipModule,
    MeiFormModule,
    MeiServiceModule,
    MatChipsModule,
    MatExpansionModule,
    KKLDirectivesModule,
    KKLNewTableModule,
    NgxDatatableModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    NgxLocalTableComponent,
    NgxTableFormComponent,
    NgxDatatableDefaultDirective,
    KKLNgxPaginatorDirective
  ],
})
export class KKLNgxTableModule {}
