export type HeadlineType = 'date' | 'default' | 'custom';

export interface PageHeadlineModel<T = any> {
  key: keyof T;
  label: string;
  format?: string;
  type?: 'date' | 'template';
  value?: any;
}
