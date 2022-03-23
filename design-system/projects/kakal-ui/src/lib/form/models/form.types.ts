import { FormActions as FormActions } from './form.actions';
import { FormChangeEvent as FormChangeEvent } from './form.options';
import { SelectOption as KKLSelectOption } from './question-select.model';
import { FormDataSource as KKLFormDataSource } from './form-datasource';

import { Question } from '../services/form.service';
import { QuestionGroupModel } from './question-group.model';

declare type OptionMap = { [key: string]: KKLSelectOption[] };

export {
  FormActions,
  KKLFormDataSource,
  FormChangeEvent,
  KKLSelectOption,
  OptionMap,
  Question,
  QuestionGroupModel,
};
