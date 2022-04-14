import { BehaviorSubject, Observable } from 'rxjs';

// export class MenuItemModel {
//   public key?: string;
//   public label?: string;
//   public path?: string;
//   public svgIcon?: string;
//   public scale?: number;
//   public size?: number;
//   public selected?: boolean;

//   constructor(options: {
//     label?: string;
//     path?: string;
//     svgIcon?: string;
//     isActive?: boolean;
//   }) {
//     this.label = options?.label;
//     this.path = options?.path;
//     this.isActive = options?.isActive || false;
//     this.svgIcon = options?.svgIcon || 'arrow_right_alt';
//   }
// }

export interface MenuItemModel {
  key?: string;
  label?: string;
  path?: string;
  svgIcon?: string;
  scale?: number;
  size?: number;
  selected?: boolean;
}
