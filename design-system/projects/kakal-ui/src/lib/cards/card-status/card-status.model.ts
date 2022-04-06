import { SelectOption } from '../../form/form-select/question-select.model';
import { CardType, CardVariant } from '../card.model';

// export class CardStatusModel  {
//   public key?: string;
//   public options?: any[];

//   constructor(options?: {
//     key?: string;
//     label?: string;
//     path?: string;
//     svgIcon?: string;
//     variant?: CardVariant;
//     type?: CardType;
//     size?: number;
//     value?: number;
//     options?: any[];
//   }) {
//     super(options);
//     this.key = options.key;
//     this.label = options?.label || '';
//     this.path = options?.path || 'search';
//     this.svgIcon = options?.svgIcon || 'reload';
//     this.variant = options?.variant || 'circle';
//     this.type = options?.type || 'status';
//     this.size = options?.size || 6;
//     this.value = options?.value || null;
//     this.options = options?.options || [];
//   }
// }
export interface CardStatusModel {
  key: string;
  label: string;
  path: string;
  svgIcon: string;
  value?: number;
  options: SelectOption[];
  variant?: CardVariant;
  type?: CardType;
  size?: number;
  divider?: number;
  disabled?: boolean;
}
