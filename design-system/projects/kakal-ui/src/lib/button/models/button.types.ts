import { FormActions } from '../../form/models/form.types';

export interface ButtonModel {
  type: string;
  label?: string;
  svgIcon?: string;
  state?: ButtonState;
  action: FormActions;
}

export interface ButtonState {
  show: boolean;
  disabled: boolean;
  valid?: boolean;
  event?: any;
}
