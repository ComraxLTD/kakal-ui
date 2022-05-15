import { NgModule } from '@angular/core';
import { TableFormComponent } from './components/table-form/table-form.component';
import { LocalTableComponent } from './components/local-table/local-table.component';
import { EventTableComponent } from './components/event-table/event-table.component';
import { EventAdvancedSearchComponent } from './components/event-table/event-advanced-search.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';
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
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { KKLIconModule } from '../icon/icon.module';
import { KKLButtonModule } from '../button/button.module';
import { HttpClientModule } from '@angular/common/http';
import { KKLNewPaginatorDirective } from './directives/pagination.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MeiFormModule } from '../mei-form/mei-form.module';
import { MeiServiceModule } from '../mei-services/mei-services.module';
import { MeiFiltersComponent } from './components/mei-filters/mei-filters.component';
import { LocalAdvancedSearchComponent } from './components/local-table/local-advanced-search.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MobileTableComponent } from './components/mobile-table/mobile-table.component';
import { KKLDirectivesModule } from '../directives/directives.module';
@NgModule({
  declarations: [
    LocalTableComponent,
    EventTableComponent,
    EventAdvancedSearchComponent,
    TableFormComponent,
    TableCellComponent,
    LocalAdvancedSearchComponent,
    MeiFiltersComponent,
    KKLNewPaginatorDirective,
    MobileTableComponent,
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
    KKLDirectivesModule
  ],
  exports: [
    LocalTableComponent,
    EventTableComponent,
    EventAdvancedSearchComponent,
    TableFormComponent,
    TableCellComponent,
    KKLNewPaginatorDirective,
    MeiFiltersComponent,
    LocalAdvancedSearchComponent,
    MobileTableComponent,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: KklPaginatorService}]
})
export class KKLNewTableModule { }
