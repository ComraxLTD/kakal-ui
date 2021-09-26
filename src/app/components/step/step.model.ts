import { MenuItemModel } from './../menu/menu.model';

export enum StepVariant {
  CIRCLE = 'circle',
  SQUARE = 'square',
}

export enum StepType {
  WIZARD = 'wizard',
  STATUS = 'status',
  STEP = 'step',
  INFO = 'info',
  CARD = 'card',
}

export enum StepperDirection {
  COLUMN = 'column',
  ROW = 'row',
}


export class StepModel extends MenuItemModel {

  public variant?: StepVariant;
  public type?: StepType;
  public size?: number;
  public scale?: number;
  public divider?: boolean;
  public spacer?: boolean;
  public value?: number;

  constructor(options?: {
    label?: string;
    path?: string;
    svgUrl?: string;
    isActive?: boolean;
    variant?: StepVariant;
    type?: StepType;
    size?: number;
    scale?: number;
    divider?: boolean;
    spacer?: boolean;
    value?: number;
  }) {
    super(options)
    this.label = options?.label || '';
    this.path = options?.path || '';
    this.isActive = options?.isActive || false;
    this.svgUrl = options?.svgUrl || '';
    this.variant = options?.variant || StepVariant.CIRCLE;
    this.type = options?.type || StepType.STEP;
    this.size = options?.size || 80;
    this.scale = options?.scale || 1;
    this.value = options?.value || null;
    this.divider = options?.divider || false;
    this.spacer = options?.spacer || false;
  }



}
