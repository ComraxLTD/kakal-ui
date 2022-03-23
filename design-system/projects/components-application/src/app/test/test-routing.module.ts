import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TestComponent } from "./components/test/test.component";
import { FirstScreenComponent } from './components/first-screen/first-screen.component';
import { SecondScreenComponent } from './components/second-screen/second-screen.component';

const routes: Routes = [
    {
        path: '', component: TestComponent, children: [
            {path:'' ,redirectTo:'first'},
            { path: 'first', component: FirstScreenComponent },
            { path: 'second', component: SecondScreenComponent }
        ]
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}
