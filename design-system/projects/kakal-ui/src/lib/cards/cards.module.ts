import { NgModule } from "@angular/core";
import { CardDashboardComponent } from './card-dashboard/card-dashboard.component';
import { CardInfoComponent } from "./card-info/card-info.component";
import { CardStatusComponent } from "./card-status/card-status.component";
import { CardStepComponent } from "./card-step/card-step.component";
import { CardUserComponent } from "./card-user/card-user.component";
import { CardWizardComponent } from "./card-wizard/card-wizard.component";

const CARDS = [CardDashboardComponent,CardInfoComponent,CardStatusComponent,CardStepComponent,CardUserComponent,CardWizardComponent]

@NgModule({
    imports: [],
    declarations: [CARDS],
    exports: [CARDS],

})

export class KKLCardsModule { }