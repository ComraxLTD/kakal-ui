import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nis',
})
export class NisPipe implements PipeTransform {
  transform(value: number, tag?: string): string {

    tag = tag || 'ש"ח';

    return `${value} ${tag}`;
  }
}
