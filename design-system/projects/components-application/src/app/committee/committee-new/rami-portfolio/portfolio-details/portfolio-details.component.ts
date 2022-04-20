import { Component, OnInit } from '@angular/core';
import { QuestionGroupModel, ControlBase, FormService } from '../../../../../../../kakal-ui/src/public-api';
import {
  PortfolioDetails,
  PortfolioDetailsService,
} from './portfolio-details.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss'],
})
export class PortfolioDetailsComponent implements OnInit {
  public portfolioDetailsGroup!: QuestionGroupModel<PortfolioDetails>;

  controls!: ControlBase[];
  constructor(
    private portfolioDetailsService: PortfolioDetailsService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.portfolioDetailsGroup = this.setPortfolioGroup();
  }

  private setPortfolioGroup(): QuestionGroupModel<PortfolioDetails> {
    const questions = this.portfolioDetailsService.getFormQuestions();
    return this.formService.createQuestionGroup({
      questions,
      options: { gridProps: { variant: 'flex', cols: 4 } },
    });
  }
}
