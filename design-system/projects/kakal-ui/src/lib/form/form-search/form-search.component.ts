import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormDataSource } from '../models/form-datasource';
import { Question } from '../services/form.service';

@Component({
  selector: 'kkl-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss'],
  providers: [FormDataSource],
})
export class FormSearchComponent implements OnInit {

  @Input() public searchControl: FormControl;
  @Input() public expended: boolean = true;
  @Input() public formTemplate: TemplateRef<any>;

  @Input() public questions: Question[];
  @Input() public formGroup: FormGroup;

  // default inputs in row
  @Input() inRow: number = 3;
  public flex: number;

  constructor() {}

  public inputs = [1, 3, 4, 5, 5, 6, 6, 6, 7, 7, 8];

  ngOnInit(): void {
    console.log(this.questions)
    console.log(this.formGroup)
    this.flex = 100 / this.inRow;
  }

  public onClick() {
    this.expended = !this.expended;
  }
}
