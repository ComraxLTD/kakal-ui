import { Directive, Input, HostBinding } from '@angular/core';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';

@Directive({
  selector: 'ngx-datatable[default]',
  exportAs: 'ngxDatatableDefault',
})
export class NgxDatatableDefaultDirective {
  @Input() class = 'expandable';
  @Input() paging: boolean;

  @HostBinding('class')
  get classes(): string {
    return `ngx-datatable ${this.class}`;
  }

  constructor(private table: DatatableComponent) {
    this.table.columnMode = ColumnMode.force;
    this.table.footerHeight = this.paging ? 65 : 0;
    this.table.headerHeight = 50;
    this.table.rowHeight = 'auto';
    this.table.summaryPosition = 'bottom';
    this.table.summaryHeight = 55;
    this.table.scrollbarH = true

  }
}
