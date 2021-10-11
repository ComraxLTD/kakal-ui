import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { AreaPipe } from './area.pipe';
import { formatDate, formatNumber } from '@angular/common';

@Pipe({
  name: 'format',
})
export class FormatPipe implements PipeTransform {
  constructor(
    private area: AreaPipe,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  transform(value: unknown, type?: string): unknown {
    let result: unknown = value;

    switch (typeof value) {
      case 'number':
        switch (type) {
          case 'area':
            result = this.area.transform(value);
            break;
          default:
            result = formatNumber(value, this.locale);
        }
        break;
      case 'object':
        if (value instanceof Date) {
          result = formatDate(value, 'M/d/yy', this.locale);
        }
    }

    return result;
  }
}
