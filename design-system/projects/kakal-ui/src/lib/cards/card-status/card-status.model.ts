import {
  CardStepModel,
} from '../card-step/card-step.model';
import { CardType, CardVariant } from '../card.model';

export class CardStatusModel extends CardStepModel {

  public key? : string
  public options? : any[];

  constructor(options?: {
    key? : string
    label?: string;
    path?: string;
    svgIcon?: string;
    variant?: CardVariant;
    type?: CardType;
    size?: number;
    value?: number;
    options? : any[]
  }) {
    super(options);
    this.key = options.key;
    this.label = options?.label || '';
    this.path = options?.path || 'search';
    this.svgIcon = options?.svgIcon || 'reload';
    this.variant = options?.variant || 'circle';
    this.type = options?.type || 'status';
    this.size = options?.size || 6;
    this.value = options?.value || null;
    this.options = options?.options || [],
    this.spacer = true;

  }
}
