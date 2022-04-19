import { Component, OnInit } from '@angular/core';
import { QuestionGroupModel, FormService } from '../../../../../../../kakal-ui/src/public-api';
import {
  PortfolioEstates,
  PortfolioEstatesService,
} from './portfolio-estates.service';

@Component({
  selector: 'app-portfolio-estates',
  templateUrl: './portfolio-estates.component.html',
  styleUrls: ['./portfolio-estates.component.scss'],
})
export class PortfolioEstatesComponent implements OnInit {
  public portfolioEstatesGroup!: QuestionGroupModel<PortfolioEstates>;

  constructor(
    private portfolioEstatesService: PortfolioEstatesService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.portfolioEstatesGroup = this.setPortfolioGroup();
  }

  private setPortfolioGroup(): QuestionGroupModel<PortfolioEstates> {
    const questions = this.portfolioEstatesService.getFormQuestions();
    return this.formService.createQuestionGroup({
      questions,
      options: {
        gridProps: {
          variant: 'flex',
          cols: 6,
          button: { align: 'end', cols: 1, label: 'הוסף' },
        },
      },
    });
  }
}
