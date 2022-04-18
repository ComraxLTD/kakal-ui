export type HeadlineType = 'date' | 'default' | 'custom';

export interface PageHeadlineModel {
  value: any;
  format?: string;
  template? : boolean
}
