import { FormEvents as KKLFormEvents } from './form-events';
import { FormOption as KKLFormOption } from './form-options';
import { SelectOption as KKLSelectOption } from './question-select.model';
import { FormDataSource as KKLFormDataSource } from './form-datasource';

declare type OptionMap = { [key: string]: KKLSelectOption[] };

export { KKLFormEvents, KKLFormDataSource, KKLFormOption, OptionMap };
