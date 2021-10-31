import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionGroupModel } from '../../components/form/models/question-group.model';
import {
  FormService,
  Question,
} from '../../components/form/services/form.service';

@Component({
  selector: 'app-expand-panel-ex',
  templateUrl: './expand-panel-ex.component.html',
  styleUrls: ['./expand-panel-ex.component.scss'],
})
export class ExpandPanelExComponent implements OnInit {
  // prop for custom class
  @Input() public variant: string;
  @Input() public hideToggle: boolean;
  @Input() public hideHeader: boolean;
  @Input() public disabled: boolean;

  @Input() public expanded: boolean;
  @Input() public hasForm: boolean;

  public questions: Question[] = [
    {
      controlType: 'select',
      key: 'record',
      label: 'סוג רישום',
      options: [
        { label: 'גוש חלקה', value: 'שם נוסף' },
        { label: 'דף ספר', value: 'עוד לקוח' },
        { label: 'מגרש', value: 'לקוח מספר שלוש' },
        { label: 'גוש שומא', value: 'לקוח מספר ארבע' },
      ],
      gridProps: {
        cols: 1,
      },
    },
    {
      controlType: 'number',
      key: 'block',
      label: 'גוש',
    },
    {
      controlType: 'number',
      key: 'section',
      label: 'חלקה',
    },
    {
      controlType: 'text',
      key: 'subSection',
      label: 'תת חלקה',
    },
  ];

  public group: QuestionGroupModel;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.variant = this.variant || '';
    this.expanded = this.expanded || false;
    this.hideToggle = this.hideToggle || false;
    this.hideHeader = this.hideHeader || false;

    this.group = this.formService.createQuestionGroup({
      key: '',
      questions: this.questions,
    });
  }
}
