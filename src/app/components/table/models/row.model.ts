import { FormGroup } from '@angular/forms';
export class RowModel<T>  {

  public item: T
  public formGroup : FormGroup
  public pending: boolean
  public editable: boolean


  constructor(options?: {
    item?: T;
    pending?: boolean;
    editable?: boolean;

  }) {
    this.item = options?.item;
    this.pending = options?.pending || false;
    this.editable = options?.editable || false;
  }
}
