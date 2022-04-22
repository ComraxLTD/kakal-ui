import { CardType, CardVariant } from '../card.model';

export type StepperDirection = 'column' | 'row';

export interface CardStepModel {
  label: string;
  path: string;
  svgIcon: string;
  value?: number;
  selected?: boolean;
  disabled?: boolean;
  hasSteps?: boolean;
}
