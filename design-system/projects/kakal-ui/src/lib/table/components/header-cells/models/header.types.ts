export declare type ColumnDef<T = any> = keyof T | 'select' | 'actions' | string;

export declare type HeaderType =
  | 'default'
  | 'custom'
  | 'actions'
  | 'select'
  | 'expend';
