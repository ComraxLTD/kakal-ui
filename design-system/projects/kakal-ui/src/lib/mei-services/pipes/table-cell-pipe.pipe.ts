import { CurrencyPipe, DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { DateRange } from '@fullcalendar/angular';
import { RadioOption } from '../../form/form-radio/question-radio.model';
import { Range } from '../../form/form-range/question-range.model';
import { SelectOption } from '../../form/form-select/question-select.model';
@Pipe({
  name: 'tableCellPipe',
})
export class TableCellPipe implements PipeTransform {
  constructor() {}

  transform(
    element:
      | string
      | SelectOption
      | RadioOption
      | DateRange
      | { sum: number; currency: string },
    type: string
  ) {
    switch (type) {
      // case 'input':
      // case 'text':
      // case 'password':
      // case 'number':
      // case 'textarea':
      // case 'sum':
      // case 'email':
      // case 'phone':
      // case 'time':
      // case 'texteditor':
      // case 'upload':
      //   return element;
      case 'select':
        const select = element as SelectOption;
        return select.label;

      case 'autocomplete':
        const autocomplete = element as SelectOption;
        return autocomplete.label;
      case 'radio':
        if (Array.isArray(element)) {
          return element.map((a: RadioOption) => a.label);
        }
        const radio = element as RadioOption;
        return radio.label;
      case 'date':
        return new DatePipe('he-HE').transform(element.toString());
      case 'dateRange':
        const dateRange = element as DateRange;
        return (
          new DatePipe('he-HE').transform(dateRange.start) +
          ' - ' +
          new DatePipe('he-HE').transform(dateRange.end)
        );
      case 'currency':
        const currency = element as { sum: number; currency: string };
        return new CurrencyPipe('he-HE').transform(
          currency.sum,
          currency.currency,
          'symbol',
          '1.0-3'
        );
      case 'range':
        const range = element as Range;
        return range.start + ' - ' + range.end;
      case 'checkbox':
        if (element) {
          return '\u2713';
        }
        return 'upload';
      case 'upload':
      default:
        return element;
    }
  }
}
