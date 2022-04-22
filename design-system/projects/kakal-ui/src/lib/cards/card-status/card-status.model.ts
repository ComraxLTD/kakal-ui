import { SelectOption } from '../../form/form-select/question-select.model';

export interface CardStatusModel {
  key: string;
  label: string;
  path: string;
  svgIcon: string;
  value?: number;
  options: SelectOption[];
  disabled?: boolean;
}
