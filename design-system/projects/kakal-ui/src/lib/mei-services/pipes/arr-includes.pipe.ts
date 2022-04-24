import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrIncludes'
})
export class ArrIncludesPipe implements PipeTransform {

  transform(value: any, arr: any[]): boolean {
    return arr.indexOf(value) != -1;
  }

}
