import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidComponent } from './components/bid/bid.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'bid', component: BidComponent },
  {
    path: 'test', children: [
      { path: '', loadChildren: () => import('./test/test.module').then((m) => m.TestModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
