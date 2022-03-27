import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { FormDataSource } from '../models/form-datasource';
import { FormChangeEvent } from '../models/form.options';
import { QuestionGroupModel } from '../models/form.types';
import { KKLFormSearchContentDirective } from './form-search.directive';

@Component({
  selector: 'kkl-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss'],
  providers: [FormDataSource],
})
export class FormSearchComponent implements OnInit {
  @Input() searchControl!: FormControl | AbstractControl;
  @Input() searchGroup!: QuestionGroupModel;
  @Input() advanced!: boolean;
  @Input() expended: boolean = true;
  @Input() asButton!: boolean;

  // default inputs in row

  public contextGroup: QuestionGroupModel;


  constructor() {}

  ngOnInit(): void {
    this.onAdvanced();
  }

  private onAdvanced(): void {
    if (this.advanced && !this.searchGroup) {
      throw new Error('Advanced search is missing a searchGroup instance.');
    }

    if (this.searchGroup) {
      const advancedQuestions = [...this.searchGroup.questions];
      advancedQuestions.splice(0, 1);

      this.searchControl = this.searchGroup.formGroup.get(
        'search'
      ) as FormControl;

      this.contextGroup = {
        ...this.searchGroup,
        questions: advancedQuestions,
      } as QuestionGroupModel;
    }
  }

  public onClick() {
    this.expended = !this.expended;
  }

  public onQueryChanged(event: FormChangeEvent): void {}

  public onOptionSelected(event: FormChangeEvent): void {}

  public onMultiOptionSelected(event: FormChangeEvent) {}
}
