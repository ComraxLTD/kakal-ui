import { FormActions as KKLFormActions } from './form.actions';
import { FormChangeEvent as KKLFormOption } from './form.options';
import { SelectOption as KKLSelectOption } from './question-select.model';
import { FormDataSource as KKLFormDataSource } from './form-datasource';

import { Question } from '../services/form.service';
import { QuestionGroupModel } from './question-group.model';

declare type OptionMap = { [key: string]: KKLSelectOption[] };

export {
  KKLFormActions,
  KKLFormDataSource,
  KKLFormOption,
  KKLSelectOption,
  OptionMap,
  Question,
  QuestionGroupModel,
};
