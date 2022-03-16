import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFormat',
})
export class FilterFormatPipe implements PipeTransform {
  transform(value: number, tag?: string): string {

    tag = tag || 'מ"ר';

    return `${value} ${tag}`;
  }
}
