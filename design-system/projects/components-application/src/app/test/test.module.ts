import { NgModule } from "@angular/core";
import { KakalUiModule } from "../../../../kakal-ui/src/public-api";
import { TestComponent } from './components/test/test.component';
import { TestRoutingModule } from "./test-routing.module";

@NgModule({
    imports: [TestRoutingModule,KakalUiModule],
    declarations: [
        TestComponent
    ],
    exports: [TestComponent]
})

export class TestModule { }