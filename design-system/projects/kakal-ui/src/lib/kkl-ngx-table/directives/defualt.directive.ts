
import { Directive, Input, HostBinding } from '@angular/core';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';

@Directive({
  // tslint:disable-next-line
  selector: 'ngx-datatable[default]',
  exportAs: 'ngxDatatableDefault',
})
export class NgxDatatableDefaultDirective {
  @Input() class = 'material expandable';

  @HostBinding('class')
  get classes(): string {
    return `ngx-datatable ${this.class}`;
  }

  constructor(private table: DatatableComponent) {
    this.table.columnMode = ColumnMode.force;
    this.table.footerHeight = 65;
    this.table.headerHeight = 50;
    this.table.rowHeight = 'auto';
  }
}
