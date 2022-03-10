export class FilterCardModel {
  public name: string;
  public count: number;
  public svg: string;

  constructor(options: { name: string; count: number; svg: string }) {
    this.name = options.name;
    this.count = options.count;
    this.svg = options.svg;
  }
}
