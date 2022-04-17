import { Component, OnInit } from '@angular/core';
import { FormGrid } from '../../../../../../kakal-ui/src/lib/form/models/question.types';
import {
  QuestionGroupModel,
  OptionMap,
  FormService,
  SelectOption,
  FormChangeEvent,
  FormActions,
} from '../../../../../../kakal-ui/src/public-api';

import { RecordsRegistrationService } from '../records-registration.service';

@Component({
  selector: 'app-registration-layout',
  templateUrl: './registration-layout.component.html',
  styleUrls: ['./registration-layout.component.scss'],
})
export class RegistrationLayoutComponent implements OnInit {
  group!: QuestionGroupModel;

  grid!: FormGrid;

  optionsMap$!: Promise<OptionMap>;

  slice: number = 2;

  constructor(
    private recordsRegistrationService: RecordsRegistrationService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.group = this.setGroup();
    this.grid = this.setFormGrid();
    this.optionsMap$ = this.recordsRegistrationService.getOptionsMap();
  }

  private setGroup(): QuestionGroupModel {
    const questions = this.recordsRegistrationService.getQuestions();
    return this.formService.createQuestionGroup({ questions });
  }

  private setFormGrid(): FormGrid {
    return { variant: 'flex', cols: 5 } as FormGrid;
  }

  private onRegisterTypeSelect(option: SelectOption) {
    const spliceMap: { [key: string]: number } = { warnings: 3, taboo: 5 };
    const { value } = option;
    this.slice = spliceMap[value];
  }

  // FORM EVENTS SECTION

  onFormChanged(event: FormChangeEvent) {
    const { action, value, key } = event;
    switch (action) {
      case FormActions.SELECT_CHANGED:
        if (key === 'registerType') {
          this.onRegisterTypeSelect(value);
        }
    }
  }
}
