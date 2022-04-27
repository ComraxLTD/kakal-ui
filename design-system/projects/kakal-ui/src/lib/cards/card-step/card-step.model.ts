
export interface CardStep {
  label: string;
  path: string;
  svgIcon: string;
  value?: number;
  selected?: boolean;
  complete?: boolean;
  disabled?: boolean;
  hasSteps?: boolean;
}
