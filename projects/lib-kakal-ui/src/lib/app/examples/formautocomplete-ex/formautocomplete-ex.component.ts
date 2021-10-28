import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { SelectOption } from '../../components/form/models/question-select.model';
import {
  FormService,
  Question,
} from '../../components/form/services/form.service';

@Component({
  selector: 'kkl-formautocomplete-ex',
  templateUrl: './formautocomplete-ex.component.html',
  styleUrls: ['./formautocomplete-ex.component.scss'],
})
export class FormautocompleteExComponent implements OnInit {
  @Input() public question: Question;
  @Input() public options: SelectOption[];

  public control: FormControl;
  public questionControl: Question;
  public options$: Observable<SelectOption[]>;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.questionControl = this.formService.setQuestion(this.question);
    this.control = this.formService.getFieldControl(this.questionControl);
    this.options$ = of(this.options);

    

  }
}
