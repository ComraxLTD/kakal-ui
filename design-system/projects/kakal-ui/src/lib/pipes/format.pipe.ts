import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { AreaPipe } from './area.pipe';
import { formatDate, formatNumber, formatCurrency } from '@angular/common';
import { PrefixPipe } from './prefix.pipe';
import { LocationPipe } from './location.pipe';

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
    @Inject(LOCALE_ID) private locale: string
  ) {}

  private setCurrency(value: any, args) {
    if (value.includes(',')) {
      value = value.split(',').reduce((acc, val) => acc + val);
    }

    return formatCurrency(value, this.locale, '₪', 'ILS', '1.0');
  }

  private formatObj(value: any, format: string, args?: string): string {
    const formats = {
      location: this.location.transform(value),
      area: this.area.transform(value),
      prefix: this.prefix.transform(value, args),
      currency: this.setCurrency(value, args),
      number: formatNumber(value, this.locale),
    };
    return formats[format] !== undefined ? formats[format] : value;
  }

  private formatDate(value: any, format: string, args?: string): string {
    const formats = {
      time: formatDate(new Date(value), 'HH:mm', this.locale),
      date: formatDate(new Date(value), 'd/M/yy', this.locale),
      fullDate: formatDate(value, 'HH:mm d/M/yy', this.locale),
    };
    return format === 'date' && value.toString() !== 'Invalid Date'
      ? formats[format]
      : value;
  }

  private formatValue(value: unknown, format?: string, args?): unknown {
    return format === 'date'
      ? this.formatDate(value, format, args)
      : this.formatObj(value, format, args);
  }

  public transform(value: unknown, format?: string, args?: any): unknown {
    return format && value ? this.formatValue(value, format, args) : value;
  }
}
