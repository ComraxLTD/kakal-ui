import { SelectOption } from '../../form/form-select/question-select.model';
import { CardType, CardVariant } from '../card.model';

export interface CardStatusModel {
  key: string;
  label: string;
  path: string;
  svgIcon: string;
  value?: number;
  options: SelectOption[];
  variant?: CardVariant;
  type?: CardType;
  size?: number;
  divider?: number;
  disabled?: boolean;
}
