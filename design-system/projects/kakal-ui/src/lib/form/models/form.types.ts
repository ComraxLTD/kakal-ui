import { FormActions as KKLFormActions } from './form.actions';
import { FormOption as KKLFormOption } from './form.options';
import { SelectOption as KKLSelectOption } from './question-select.model';
import { FormDataSource as KKLFormDataSource } from './form-datasource';

declare type OptionMap = { [key: string]: KKLSelectOption[] };

export { KKLFormActions, KKLFormDataSource, KKLFormOption, KKLSelectOption, OptionMap };
