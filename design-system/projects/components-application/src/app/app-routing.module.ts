import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: LayoutComponent, data: { breadcrumb: 'דף הבית' },children:[
    {
      path: 'test', children: [
        { path: '', loadChildren: () => import('./test/test.module').then((m) => m.TestModule) }
      ]
    }
  ]},
  { path: 'details', component: DetailsComponent, },
  { path: 'details/:id', component: DetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
