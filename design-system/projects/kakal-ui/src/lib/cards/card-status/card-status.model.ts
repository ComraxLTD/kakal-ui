import { SelectOption } from '../../form/form-select/question-select.model';

export interface CardStatus {
  key: string;
  label: string;
  path: string;
  svgIcon: string;
  value?: number;
  disabled?: boolean;
  options: SelectOption[];
}
