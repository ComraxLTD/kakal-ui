import { FormEvents } from '../form/models/form-types';


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
