import { CardType, CardVariant } from '../card.model';

export type StepperDirection = 'column' | 'row';

export interface CardStepModel {
  label: string;
  path: string;
  svgIcon: string;
  value?: number;
  selected?: boolean;
  variant?: CardVariant;
  type?: CardType;
  size?: number;
  divider?: number;
  disabled?: boolean;
  hasSteps? : boolean;
  isActive?: boolean;
}
