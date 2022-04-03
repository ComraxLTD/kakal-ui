export type HeadlineType = 'date' | 'default' | 'custom';

export interface PageHeadlineModel<T = any> {
  key: keyof T;
  value: any;
  label?: string;
  format?: string;
  type?: 'date' | 'template';
  template? : boolean
}
