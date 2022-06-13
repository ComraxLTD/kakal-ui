import { FormActions } from '../../form/models/form.types';

export interface ButtonModel {
  type: 'form' | 'notes' | 'file' | string;
  label?: string;
  svgIcon?: string;
  matIcon?: string;
  state?: ButtonState;
  action?: FormActions;
}

export interface ButtonState {
  show: boolean;
  disabled: boolean;
  valid?: boolean;
  event?: any;
}
