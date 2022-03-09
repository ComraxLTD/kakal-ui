import { Pipe, PipeTransform } from '@angular/core';
import { Range } from '../table/components/header-cells/components/filter-range-cell/filter-range-cell.component';
// import { Range } from '../components/columns/column-filter/column-filter.component';

import { FormatPipe } from './format.pipe';

@Pipe({
  name: 'range',
})
export class RangePipe implements PipeTransform {
  constructor(private format: FormatPipe) {}

  transform(value: Range, format?: string): string {
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

  // *** Commit until import column-filter;

  // transform(value: Range, format?: string): string {
  //   let result = '';

  //   const { to, from } = value;

  //   if (to && from) {
  //     result = `${this.format.transform(from, format)}-${this.format.transform(
  //       to,
  //       format
  //     )}`;
  //   } else if (to || from) {
  //     result = `${this.format.transform(from, format)}`;
  //   }

  //   return result;
  // }
}
