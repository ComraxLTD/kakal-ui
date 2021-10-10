import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  FormService,
  Question,
} from 'src/app/components/form/services/form.service';

@Component({
  selector: 'app-input-ex',
  templateUrl: './input-ex.component.html',
  styleUrls: ['./input-ex.component.scss'],
})
export class InputExComponent implements OnInit {
  public question: Question;

  public control: FormControl;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.questions = this.formService.setQuestionList(this.questions);

    this.question = this.questions[0];
    console.log(this.question)
    this.control = this.formService.getFieldControl(this.question);
  }

  private questions: Question[] = [
    {
      controlType: 'select',
      multi: true,
      key: 'record',
      label: 'סוג רישום',
      options: [
        { label: 'גוש חלקה', value: 'שם נוסף' },
        { label: 'דף ספר', value: 'עוד לקוח' },
        { label: 'מגרש', value: 'לקוח מספר שלוש' },
        { label: 'גוש שומא', value: 'לקוח מספר ארבע' },
      ],
      onSelectChange: () => {},
    },
    {
      controlType: 'text',
      key: 'block',
      label: 'גוש',
    },
    {
      controlType: 'text',
      key: 'section',
      label: 'חלקה',
    },
    {
      controlType: 'text',
      key: 'subSection',
      label: 'תת חלקה',
    },
  ];

  private ownerQuestions: Question[] = [
    {
      controlType: 'select',
      multi: true,
      key: 'property',
      label: 'זכות בנכס',
      options: [
        { label: 'גוש חלקה', value: 'שם נוסף' },
        { label: 'גוש שומא', value: 'לקוח מספר ארבע' },
      ],
    },
    {
      controlType: 'select',
      multi: true,
      key: 'eligibility',
      label: 'מקור זכאות',
      options: [
        { label: 'גוש חלקה', value: 'שם נוסף' },
        { label: 'גוש שומא', value: 'לקוח מספר ארבע' },
      ],
    },
  ];
}
