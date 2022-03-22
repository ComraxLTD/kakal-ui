import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormDataSource } from '../models/form-datasource';
import { FormChangeEvent } from '../models/form.options';
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

  @Output() public optionSelected: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() multiOptionsSelected: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  @Output() public queryChanged: EventEmitter<FormChangeEvent> =
    new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.expended = this.advanced;
  }

  public onClick() {
    this.expended = !this.expended;
  }

  public onQueryChanged(event: FormChangeEvent): void {
    this.queryChanged.emit(event);
  }

  public onOptionSelected(event: FormChangeEvent): void {
    this.optionSelected.emit(event);
  }

  public onMultiOptionSelected(event: FormChangeEvent) {
    this.optionSelected.emit(event);
  }
}
