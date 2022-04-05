import { FormActions } from "../../form/models/form.types";

export interface ButtonModel {
  type: FormActions;
  svgIcon: string;
  label: string;
  state? : ButtonState
}

export interface ButtonState {
  show: boolean;
  disabled: boolean;
  valid?: boolean;
  event?: any;
}
