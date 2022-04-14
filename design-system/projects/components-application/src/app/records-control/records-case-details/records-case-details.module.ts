import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecordsCaseDetailsRoutingModule } from './records-case-details-routing.module';

import { CaseDetailsLayoutComponent } from './case-details-layout/case-details-layout.component';
import { CaseDetailsDataComponent } from './case-details-data/case-details-data.component';
import { CaseDetailsListComponent } from './case-details-list/case-details-list.component';
import { CaseDetailsDocumentsComponent } from './case-details-documents/case-details-documents.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, KakalUiModule } from '../../../../../kakal-ui/src/public-api';



@NgModule({
  declarations: [
    CaseDetailsLayoutComponent,
    CaseDetailsDataComponent,
    CaseDetailsListComponent,
    CaseDetailsDocumentsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecordsCaseDetailsRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    KakalUiModule,
  ]
})
export class RecordsCaseDetailsModule { }
