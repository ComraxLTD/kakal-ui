import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { Test2Component } from "./test2/test2.component";

const routes: Routes = [
    {path:'',children: [
        {path:'',component:Test2Component,data:{breadcrumb:'test2'}}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Test2RoutingModule { }
