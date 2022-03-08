import { NgModule } from "@angular/core";
import { CardWizardComponent } from './card-wizard.component';
import { MatCardModule } from '@angular/material/card';
import { KKLTypographyModule } from "../../typography/typography.module";
import { KKLIconModule } from '../../icon/icon.module';
import { CommonModule } from "@angular/common";
import { MatBadgeModule } from '@angular/material/badge';
import { KKLDirectivesModule } from "../../directives/directives.module";

@NgModule({
    imports: [MatCardModule, KKLTypographyModule, KKLIconModule,CommonModule,MatBadgeModule,KKLDirectivesModule],
    declarations: [CardWizardComponent],
    exports: [CardWizardComponent]
})

export class KKLCardWizardModule { }