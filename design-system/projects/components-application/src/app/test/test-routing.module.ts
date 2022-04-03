import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TestComponent } from "./components/test/test.component";
import { FirstScreenComponent } from './components/first-screen/first-screen.component';
import { SecondScreenComponent } from './components/second-screen/second-screen.component';

const routes: Routes = [
    {
        path: '', component: TestComponent, data: { breadcrumb: 'test' }, children: [
            { path: '', redirectTo: 'first' },
            { path: 'first', component: FirstScreenComponent, data: { breadcrumb: 'ראשון' } },
            { path: 'second', component: SecondScreenComponent, data: { breadcrumb: 'שני' } },
            { path: 'test2', loadChildren: () => import('../test2/test2.module').then((m) => m.Test2Module) }

        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TestRoutingModule { }
