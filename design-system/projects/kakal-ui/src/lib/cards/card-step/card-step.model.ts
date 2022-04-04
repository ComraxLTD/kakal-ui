import { CardType, CardVariant } from '../card.model';

export type StepperDirection = 'column' | 'row';

// export class CardStepModel extends MenuItemModel {
//   public variant?: CardVariant;
//   public type?: CardType;
//   // public stroke?: boolean;
//   public divider?: number;
//   // public spacer?: boolean;
//   public disabled?: boolean;
//   public value?: number;

//   constructor(options?: {
//     label?: string;
//     path?: string;
//     svgIcon?: string;
//     // stroke?: boolean;
//     isActive?: boolean;
//     variant?: CardVariant;
//     type?: CardType;
//     size?: number;
//     divider?: number;
//     // spacer?: boolean;
//     disabled?: boolean;
//     value?: number;
//   }) {
//     super(options);
//     this.label = options?.label || '';
//     this.path = options?.path || '';
//     // this.stroke = options?.stroke || false;
//     this.isActive = options?.isActive || false;
//     this.svgIcon = options?.svgIcon || '';
//     this.variant = options?.variant || 'circle';
//     this.type = options?.type || 'step';
//     this.size = options?.size || 6;
//     this.value = options?.value || null;
//     this.divider = options?.divider || 0;
//     // this.spacer = options?.spacer || false;
//     this.disabled = options?.disabled || false;
//   }
// }

export interface CardStepModel {
  label: string;
  path: string;
  svgIcon: string;
  value?: number;
  // stroke?: boolean;
  isActive?: boolean;
  variant?: CardVariant;
  type?: CardType;
  size?: number;
  divider?: number;
  // spacer?: boolean;
  disabled?: boolean;
}
