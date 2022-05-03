import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { AreaPipe } from './area.pipe';
import { formatDate, formatNumber, formatCurrency } from '@angular/common';
import { PrefixPipe } from './prefix.pipe';
import { LocationPipe } from './location.pipe';
import { PluckPipe } from './pluck.pipe';

export interface FormatPipe {
  type: string;
  args: any;
}

@Pipe({
  name: 'format',
})
export class FormatPipe implements PipeTransform {
  constructor(
    private area: AreaPipe,
    private prefix: PrefixPipe,
    private location: LocationPipe,
    private pluck: PluckPipe,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  private setCurrency(value: any, args) {
    console.log(value);

    if (typeof value === 'string' && value.includes(',')) {
      value = value.split(',').reduce((acc, val) => acc + val);
    }

    if (args) {
      return formatCurrency(value, this.locale, args(), '', '1.0');
    }
    return formatCurrency(value, this.locale, '₪', '', '1.0');
  }

  private format(value: any, format: string, args?: string): string {
    const formats = {
      location: (value) => this.location.transform(value),
      area: (value) => this.area.transform(value),
      prefix: (value, args) => this.prefix.transform(value, args),
      currency: (value, args) => this.setCurrency(value, args),
      number: (value) => formatNumber(value, this.locale),
      pluck: (value, args) => this.pluck.transform(value, args),
      time: (value) => formatDate(new Date(value), 'HH:mm', this.locale),
      date: (value) => formatDate(new Date(value), 'd/M/yy', this.locale),
      fullDate: (value) => formatDate(value, 'HH:mm d/M/yy', this.locale),
    };
    return formats[format] !== undefined ? formats[format](value, args) : value;
  }

  // private formatDate(value: any, format: string): string {
  //   const formats = {
  //     time: (value) => formatDate(new Date(value), 'HH:mm', this.locale),
  //     date: (value) => formatDate(new Date(value), 'd/M/yy', this.locale),
  //     fullDate: (value) => formatDate(value, 'HH:mm d/M/yy', this.locale),
  //   };
  //   return value.toString() !== 'Invalid Date' ? formats[format] : value;
  // }

  private formatValue(value: unknown, format?: string, args?): unknown {
    return this.format(value, format, args);
  }

  public transform(value: unknown, format?: string, args?: any): unknown {
    return format && value && value.toString() !== 'Invalid Date'
      ? this.formatValue(value, format, args)
      : value;
  }
}
