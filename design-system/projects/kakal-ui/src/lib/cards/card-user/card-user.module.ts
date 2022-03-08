import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { KKLDirectivesModule } from "../../directives/directives.module";
import { CardUserComponent } from './card-user.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
    imports: [KKLDirectivesModule, MatCardModule,MatDividerModule],
    declarations: [CardUserComponent],
    exports: [CardUserComponent]
})

export class KKLCardUserModule {}