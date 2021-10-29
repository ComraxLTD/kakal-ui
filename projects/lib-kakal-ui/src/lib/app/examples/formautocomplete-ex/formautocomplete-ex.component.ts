import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectOption } from '../../components/form/models/question-select.model';
import { FormService, Question } from '../../components/form/services/form.service';

@Component({
  selector: 'app-formautocomplete-ex',
  templateUrl: './formautocomplete-ex.component.html',
  styleUrls: ['./formautocomplete-ex.component.scss']
})
export class FormautocompleteExComponent implements OnInit {

  public question: Question;
  public control: FormControl;

  @Input()  questions : Question[];
  @Input()  options : SelectOption[];

  
  constructor(private formService: FormService) { }

  ngOnInit(): void {
    const questions = this.formService.setQuestionList(this.questions);
    this.question = questions[0];
    this.control = this.formService.getFieldControl(this.question);
  }

}
