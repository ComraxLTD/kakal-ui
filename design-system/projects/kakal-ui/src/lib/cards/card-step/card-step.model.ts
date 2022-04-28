import { CardType, CardVariant } from '../card.model';

export interface CardStep {
  label: string;
  path: string;
  svgIcon: string;
  value?: number;
  selected?: boolean;
  disabled?: boolean;
  hasSteps?: boolean;
}
export interface StepOptions {
  variant?: CardVariant;
  type?: CardType;
  size?: number;
  divider?: number;
}
