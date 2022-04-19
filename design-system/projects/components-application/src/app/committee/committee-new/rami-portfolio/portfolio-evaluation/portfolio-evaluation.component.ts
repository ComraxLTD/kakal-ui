import { Component, OnInit } from '@angular/core';
import { QuestionGroupModel, FormService } from '../../../../../../../kakal-ui/src/public-api';
import {
  PortfolioEvaluations,
  PortfolioEvaluationsService,
} from './portfolio-evaluation.service';

@Component({
  selector: 'app-portfolio-evaluation',
  templateUrl: './portfolio-evaluation.component.html',
  styleUrls: ['./portfolio-evaluation.component.scss'],
})
export class PortfolioEvaluationComponent implements OnInit {
  public portfolioEvaluationGroup!: QuestionGroupModel<PortfolioEvaluations>;

  constructor(
    private portfolioEvaluationsService: PortfolioEvaluationsService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.portfolioEvaluationGroup = this.setPortfolioGroup();
  }

  private setPortfolioGroup(): QuestionGroupModel<PortfolioEvaluations> {
    const questions = this.portfolioEvaluationsService.getFormQuestions();
    return this.formService.createQuestionGroup({
      questions,
    });
  }
}
