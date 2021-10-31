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

  @Input() public question : Question
  public control: FormControl;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.question = this.formService.setQuestion(this.question);
    this.control = this.formService.getFieldControl(this.question);
  }
}
