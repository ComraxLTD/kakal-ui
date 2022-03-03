import { FormEvent } from '../form/models/form-data-source.model';

// export declare type TableEvent =
//   | FormEvent
//   | 'expand'
//   | 'close'
//   | 'cancel'
//   | 'form'
//   | 'selected'
//   | 'reset'
//   | 'selectRows'
//   | 'addOptions'
//   | 'updateOptions'
//   | 'updateSortDir'
//   | 'updateOptionsSelected'
//   | 'updateMulti';

export declare type TableActions =
  | 'expand'
  | 'close'
  | 'cancel'
  | 'form'
  | 'selected'
  | 'reset';

export enum TableEvent {
  EDIT = 'edit',
  DELETE = 'delete',
  DEFAULT = 'default',
  CLOSE = 'close',
}
