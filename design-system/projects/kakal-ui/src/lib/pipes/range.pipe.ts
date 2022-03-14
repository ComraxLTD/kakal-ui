import { Pipe, PipeTransform } from '@angular/core';
import { FilterRange } from '../table/components/header-cells/models/header.types';

import { FormatPipe } from './format.pipe';

@Pipe({
  name: 'range',
})
export class RangePipe implements PipeTransform {
  constructor(private format: FormatPipe) {}

  transform(value: FilterRange, format?: string): string {
    let result = '';

    const { start, end } = value;

    if (start && end) {
      result = `${this.format.transform(end, format)}-${this.format.transform(
        start,
        format
      )}`;
    } else if (start || end) {
      result = `${this.format.transform(end, format)}`;
    }

    return result;
  }
}
