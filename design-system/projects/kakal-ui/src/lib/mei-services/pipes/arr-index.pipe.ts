import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrIndex'
})
export class ArrIndexPipe implements PipeTransform {

  transform(value: any, arr: any[]): number {
    return arr.indexOf(value);
  }
}
