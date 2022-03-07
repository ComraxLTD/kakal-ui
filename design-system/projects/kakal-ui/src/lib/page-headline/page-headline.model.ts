export type HeadlineType = 'date' | 'default' | 'custom';
// size?: number;
// label: string | number;

export class PageHeadlineModel {
  public label: number | string | Date;
  public type: HeadlineType;
  public size: number;
  public key:string;
  constructor(options: {
    type?: HeadlineType;
    key?: string;
    label: number | string;
    size: number;
  }) {
    this.label = options.label || '';
    this.key = options?.key || '';
    this.type = options.type || 'default';
    this.size = options.size || 1.2;
  }
}
