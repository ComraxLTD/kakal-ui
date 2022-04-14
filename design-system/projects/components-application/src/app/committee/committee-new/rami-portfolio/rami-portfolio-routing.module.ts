import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioLayoutComponent } from './portfolio-layout/portfolio-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioLayoutComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RamiPortfolioRoutingModule {}
