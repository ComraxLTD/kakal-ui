import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormDataSource } from '../../form/models/form-data-source.model';
import { QuestionGroupModel } from '../../form/models/question-group.model';
import { FormService, Question } from '../../form/services/form.service';

@Component({
  selector: 'pl-form-ex',
  templateUrl: './form-ex.component.html',
  styleUrls: ['./form-ex.component.scss']
})
export class FormExComponent implements OnInit {

  @Input() public group: QuestionGroupModel;
  @Input() public formDataSource: FormDataSource;

  @Input() public rowHeight: number;
  @Input() public gutter: number;

  @Input() public slots: {
    button?: ElementRef;
    group?: ElementRef;
  };

  @Input() optionsSlot: { [key: string]: ElementRef };

  constructor(private formService: FormService) { }

  // questions:Question[] = [
  //   {
  //     key:'text-input',
  //     controlType:'text',
  //     label:'Enter text'
  //   }
  // ];

  public formGroup:QuestionGroupModel ;
  ngOnInit(): void {
    this.formGroup = this.formService.createQuestionGroup({
      questions: this.group.questions,
      key: this.group.key,
      // options: this.group.
  });

  }

}
