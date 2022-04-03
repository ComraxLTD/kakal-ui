import { NgModule } from '@angular/core';
import { KakalUiModule } from '../../../../kakal-ui/src/public-api';
import { Test2RoutingModule } from './test2-routing.module';
import { Test2Component } from './test2/test2.component';

@NgModule({
    imports: [Test2RoutingModule, KakalUiModule],
    declarations: [
        Test2Component
    ],
    exports: [],
})
export class Test2Module {
}
