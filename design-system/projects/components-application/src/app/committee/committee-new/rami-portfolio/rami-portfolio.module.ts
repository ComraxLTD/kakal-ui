import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RamiPortfolioRoutingModule } from './rami-portfolio-routing.module';
import { PortfolioLayoutComponent } from './portfolio-layout/portfolio-layout.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { PortfolioEvaluationComponent } from './portfolio-evaluation/portfolio-evaluation.component';
import { PortfolioEstatesComponent } from './portfolio-estates/portfolio-estates.component';
import { PortfolioDocumentsComponent } from './portfolio-documents/portfolio-documents.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MaterialModule,
  KakalUiModule,
} from '../../../../../../kakal-ui/src/public-api';

@NgModule({
  declarations: [
    PortfolioLayoutComponent,
    PortfolioDetailsComponent,
    PortfolioEvaluationComponent,
    PortfolioEstatesComponent,
    PortfolioDocumentsComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    KakalUiModule,
    RamiPortfolioRoutingModule,
  ],
})
export class RamiPortfolioModule {}
