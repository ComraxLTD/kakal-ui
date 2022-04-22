import { Palette } from '../../../styles/theme';
import { CardType, CardVariant } from '../card.model';

// export class CardInfoModel {
//   public subLabel?: string;
//   public color?: Palette;

//   constructor(options?: {
//     key?: string;
//     label?: string;
//     subLabel?: string;
//     svgIcon?: string;
//     color?: Palette;
//     value?: any;
//     variant?: CardVariant;
//     type?: CardType;
//     size?: number;
//   }) {
//     super(options);
//     this.key = options?.key || '';
//     this.label = options?.label || '';
//     this.subLabel = options?.subLabel || '';
//     this.color = options?.color || 'primary';
//     this.variant = 'square';
//     this.type = 'info';
//     this.size = options?.size || 3.5;
//   }
// }
export interface CardInfoModel {
  key?: string;
  label?: string;
  subLabel?: string;
  svgIcon?: string;
  value?: any;
}
