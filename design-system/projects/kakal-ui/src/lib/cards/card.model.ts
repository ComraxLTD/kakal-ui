export type CardVariant = 'circle' | 'square';

export type CardType = 'wizard' | 'status' | 'step' | 'info';

export class CardModel {
  public key?: string;
  public value?: any;
  public label?: string;
  public svgIcon?: string;
  public variant?: CardVariant;
  public type?: CardType;
  public path?: string;
  public size?: number;
  

  constructor(options: {
    key?: string;
    value?: any;
    label?: string;
    svgIcon?: string;
    variant?: CardVariant;
    type?: CardType;
    path?: string;
    size?: number;
  }) {
    this.key = options?.key;
    this.label = options?.label;
    this.value = options?.value;
    this.path = options?.path;
    this.svgIcon = options?.svgIcon || 'reload';
    this.variant = options?.variant || 'circle';
    this.type = options?.type || 'step';
    this.size = options?.size || 1;
  }
}
