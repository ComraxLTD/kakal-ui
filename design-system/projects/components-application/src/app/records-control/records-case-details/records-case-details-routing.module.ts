import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseDetailsLayoutComponent } from './case-details-layout/case-details-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CaseDetailsLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordsCaseDetailsRoutingModule {}
