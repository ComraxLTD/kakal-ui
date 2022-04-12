import { CurrencyPipe, DatePipe, formatDate } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'tableCellPipe'
})
export class TableCellPipe implements PipeTransform {

    constructor() {
    }
    transform(element: any, type: any) {
        switch (type) {
            case 'input':
            case 'text':
            case 'password':
            case 'number':
            case 'textarea':
            case 'currency':
            case 'sum':
            case 'email':
            case 'phone':
            case 'cleave':
            case 'time':
            case 'range':
            case 'checkbox':
            case 'radio':
            case 'upload':
            case 'toggle':
            case 'texteditor':
              return element;
            case 'select':
            case 'autocomplete':
              if(Array.isArray(element)) {
                return element.map((a: any) => a.label);
              }
              return element.label;
            case 'date':
              return new DatePipe('he-HE').transform(element);
            case 'dateRange':
              return new DatePipe('he-HE').transform(element.start) +' - '+ new DatePipe('he-HE').transform(element.end);
            case 'currency':
              return new CurrencyPipe('he-HE').transform(element.sum, element.currency, 'symbol', '1.0-3');
            default:
              return element;
        }
    }




}
