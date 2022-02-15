import { Palette } from '../../styles/theme';

export declare type IconType = 'mat' | 'svg';

export class IconModel {
  public key: string;
  public size: number;
  public type?: 'mat' | 'svg';
  public path?: string;
  public color?: Palette;

  constructor(options: {
    key: string;
    size: number;
    type?: 'mat' | 'svg';
    path?: string; 
    color?: Palette;
  }) {
    this.key = options.key;
    this.size = options.size;
    this.type = options.type;
    this.path = options.path;
    this.color = options.color;
  }
}
