import { NgModule } from '@angular/core';
import { KakalUiModule } from '../../../../kakal-ui/src/public-api';
import { TestComponent } from './components/test/test.component';
import { TestRoutingModule } from "./test-routing.module";
import { FirstScreenComponent } from './components/first-screen/first-screen.component';
import { SecondScreenComponent } from './components/second-screen/second-screen.component';

@NgModule({
    imports: [TestRoutingModule,KakalUiModule],
    declarations: [
        TestComponent,
        FirstScreenComponent,
        SecondScreenComponent
    ],
    exports: [TestComponent]
})
export class TestModule {}
