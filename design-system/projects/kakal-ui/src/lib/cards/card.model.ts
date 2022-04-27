import { Palette } from "../../public-api";

export type CardVariant = 'circle' | 'square';

export type CardType = 'wizard' | 'status' | 'step' | 'info';

export class Card {
  key?: string;
  value?: any;
  label?: string;
  svgIcon?: string;
  path?: string;
}

export interface CardOptions {
  variant?: CardVariant;
  type?: CardType;
  size?: number;
  divider?: number;
  color?: Palette;
}
