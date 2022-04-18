import { FormActions } from './form.actions';
import { FormChangeEvent } from './form.options';
import { SelectOption } from '../form-select/question-select.model';
import { FormDataSource } from './form-datasource';

import { Question } from '../services/form.service';
import { QuestionGroupModel } from './question-group.model';

declare type OptionMap = { [key: string]: SelectOption[] };

export {
  FormActions,
  FormDataSource,
  FormChangeEvent,
  SelectOption,
  OptionMap,
  Question,
  QuestionGroupModel,
};
