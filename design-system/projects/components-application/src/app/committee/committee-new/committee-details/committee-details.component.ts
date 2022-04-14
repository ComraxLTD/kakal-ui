import { Component, OnInit } from '@angular/core';
import { FormDataSource, FormService, QuestionGroupModel } from '../../../../../../kakal-ui/src/public-api';

import {
  CommitteeDetails,
  CommitteeDetailsService,
} from './committee-details.service';

@Component({
  selector: 'app-committee-details',
  templateUrl: './committee-details.component.html',
  styleUrls: ['./committee-details.component.scss'],
  providers: [FormDataSource, FormService],
})
export class CommitteeDetailsComponent implements OnInit {
  committeeGroup!: QuestionGroupModel<CommitteeDetails>;
  obsName!: string;
  date!: Date;

  constructor(
    private committeeDetailsService: CommitteeDetailsService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.committeeGroup = this.setCommitteeGroup();
    this.obsName = 'ישראל ישראלי';
    this.date = new Date();
  }

  private setCommitteeGroup(): QuestionGroupModel<CommitteeDetails> {
    const questions = this.committeeDetailsService.getFormQuestions();
    return this.formService.createQuestionGroup({
      questions,
      options: { gridProps: { cols: 4, gutter: 2 } },
    });
  }
}
