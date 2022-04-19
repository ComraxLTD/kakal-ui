import { Component, OnInit } from '@angular/core';
import { QuestionGroupModel, FormService } from '../../../../../../../kakal-ui/src/public-api';
import {
  PortfolioDocs,
  PortfolioDocsService,
} from './portfolio-documents.service';

@Component({
  selector: 'app-portfolio-documents',
  templateUrl: './portfolio-documents.component.html',
  styleUrls: ['./portfolio-documents.component.scss'],
})
export class PortfolioDocumentsComponent implements OnInit {
  portfolioDocsGroup!: QuestionGroupModel<PortfolioDocs>;

  constructor(
    private portfolioDocsService: PortfolioDocsService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.portfolioDocsGroup = this.setPortfolioGroup();
  }

  private setPortfolioGroup(): QuestionGroupModel<PortfolioDocs> {
    const questions = this.portfolioDocsService.getFormQuestions();
    return this.formService.createQuestionGroup({
      questions,
    });
  }
}
