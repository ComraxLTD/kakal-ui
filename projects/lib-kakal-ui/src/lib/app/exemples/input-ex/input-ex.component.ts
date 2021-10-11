import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  FormService,
  Question,
} from '../../components/form/services/form.service';

@Component({
  selector: 'app-input-ex',
  templateUrl: './input-ex.component.html',
  styleUrls: ['./input-ex.component.scss'],
})
export class InputExComponent implements OnInit {

  @Input() public questions : Question[]
  public question: Question;
  public control: FormControl;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    const questions = this.formService.setQuestionList(this.questions);
    this.question = questions[0];
    this.control = this.formService.getFieldControl(this.question);
  }
}
