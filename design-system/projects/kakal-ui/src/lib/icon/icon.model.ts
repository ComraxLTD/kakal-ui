import { Palette } from '../../styles/theme';

export interface IconModel {
  key: string;
  size: number;
  type?: 'mat' | 'svg';
  path?: string;
  color?: Palette;
}
