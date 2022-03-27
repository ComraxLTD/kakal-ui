import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuestionCheckboxGroup } from '../../../../../kakal-ui/src/lib/form/form-checkbox-group/question-checkbox-group.model';
import {
  QuestionGroupModel,
  QuestionUploadModel,
  Question,
  FormService,
} from '../../../../../kakal-ui/src/public-api';

import { OrderDetailsBid } from './order-details-bid';
import { OrderDetailsBidService } from './order-details-bid.service';

@Component({
  selector: 'app-order-details-bid',
  templateUrl: './order-details-bid.component.html',
  styleUrls: ['./order-details-bid.component.scss'],
})
export class OrderDetailsBidComponent implements OnInit {
  public bidGroup!: QuestionGroupModel<OrderDetailsBid>;
  public uploadGroup!: { control: FormControl; question: QuestionUploadModel };

  public bidQuestions!: Question[];

  get uploadControl() {
    return this.bidGroup.getControl('upload');
  }

  get priceGroup() {
    return this.bidGroup.controls['priceGroup'] as QuestionCheckboxGroup;
  }

  constructor(
    private orderDetailsBidService: OrderDetailsBidService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.bidGroup = this.initBidGroup();
    this.bidQuestions = this.bidGroup.questions.slice(0, 4);
    this.uploadGroup = this.initUploadControl();
  }

  private initBidGroup(): QuestionGroupModel<OrderDetailsBid> {
    const questions = this.orderDetailsBidService.getBidQuestions();

    return this.formService.createQuestionGroup({
      questions,
      key: 'orderDetailsBidForm',
      options: { gridProps: { cols: 4 } },
    });
  }

  private initUploadControl() {
    const question = this.orderDetailsBidService.getUploadQuestion();
    return { control: this.formService.getFieldControl(question), question };
  }

  // DOE EVENTS SECTIONS

  public onViewPage(): void {}
}
