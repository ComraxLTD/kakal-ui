import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pluck' })
export class PluckPipe implements PipeTransform {
  transform(value: any, args: any): any {
    if (typeof args === 'string') {
      return value[args];
    } else {
      return args(value);
    }
  }
}
