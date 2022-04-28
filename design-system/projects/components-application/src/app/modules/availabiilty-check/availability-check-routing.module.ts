import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
    data:{breadcrumb:'בדיקת זמינות'}
  },

  {
    path: 'search',
    component: LayoutComponent,
    children: [
      {
        path: 'results',
        component: SearchResultsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvailabilityCheckRoutingModule { }
