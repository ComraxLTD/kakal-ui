import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormDataSource } from '../models/form-datasource';
import { Question } from '../services/form.service';
import { KKLFormSearchContentDirective } from './form-search.directive';

@Component({
  selector: 'kkl-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss'],
  providers: [FormDataSource],
})
export class FormSearchComponent implements OnInit {
  @ContentChild(KKLFormSearchContentDirective) formSearchDirective;

  @Input() public searchControl: FormControl;

  @Input() public questions: Question[];
  @Input() public advanced: boolean;
  @Input() public formGroup: FormGroup;

  @Input() public inRow: number = 3;

  // default inputs in row
  public expended: boolean;
  public flex: number;

  constructor() {}

  ngOnInit(): void {
    this.expended = this.advanced;
  }

  public onClick() {
    this.expended = !this.expended;
  }
}
