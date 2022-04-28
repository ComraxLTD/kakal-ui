import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvailabilityCheckRoutingModule } from './availability-check-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    LayoutComponent,
    SearchResultsComponent,
  ],
  imports: [
    CommonModule,
    AvailabilityCheckRoutingModule,
    CoreModule
  ]
})
export class AvailabilityCheckModule { }
