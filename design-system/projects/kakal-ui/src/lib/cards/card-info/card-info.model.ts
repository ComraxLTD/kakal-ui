import { Palette } from 'src/styles/theme';
import { CardModel } from '../card.model';
import { CardType, CardVariant } from '../card.model';

export class CardInfoModel extends CardModel {
  public subLabel?: string;
  public color?: Palette;
  public tooltip?: any;

  constructor(options?: {
    key?: string;
    label?: string;
    subLabel?: string;
    svgUrl?: string;
    color?: Palette;
    value?: any;
    variant?: CardVariant;
    tooltip?: any;
    type?: CardType;
    size?: number;
  }) {
    super(options);
    this.key = options?.key || '';
    this.label = options?.label || '';
    this.subLabel = options?.subLabel || '';
    this.color = options?.color || 'primary';
    this.variant = 'square';
    this.type = 'info';
    this.tooltip = options?.tooltip || null;
    this.size = options?.size || 3.5;
  }
}
