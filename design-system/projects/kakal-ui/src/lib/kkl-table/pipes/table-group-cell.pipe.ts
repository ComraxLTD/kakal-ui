import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableGroupCell'
})
export class TableGroupCellPipe implements PipeTransform {

  transform(index: number, key: string | undefined, spans: any[]): number {
    if(!key) {
      return 1;
    }
    return spans[index] && spans[index][key];
  }

}
