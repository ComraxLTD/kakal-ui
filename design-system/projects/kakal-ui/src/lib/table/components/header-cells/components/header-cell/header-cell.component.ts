import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { HeaderCellModel } from '../../models/header-cell.model';

@Component({
  selector: 'kkl-header-cell',
  templateUrl: './header-cell.component.html',
  styleUrls: ['./header-cell.component.scss'],
})
export class HeaderCellComponent implements OnInit, AfterViewInit {
  @ViewChild('filterCell') filterHeaderTemplate: TemplateRef<any>;
  @ViewChild('rangeFilter') rangeFilterTemplate: TemplateRef<any>;

  @Input() column: HeaderCellModel;
  @Input() label: string;
  @Input('itemKey') key: string;
  @Input() columnDef: string;
  @Input() headerTemplate: { [key: string]: TemplateRef<any> } = {};
  @Input() filterTemplate: { [key: string]: TemplateRef<any> } = {};

  @Output() fetchOptions: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const filterTemplateMap = {
      numberRange: this.rangeFilterTemplate,
      dateRange: this.rangeFilterTemplate,
    };

    if (this.column.filterType) {
      this.headerTemplate = {
        [this.column.columnDef]: this.filterHeaderTemplate,
      };
    }

    this.filterTemplate = {
      [this.column.columnDef]: filterTemplateMap[this.column.filterType],
    };
  }

  public onMenuOpen() {
    this.fetchOptions.emit(this.columnDef);
  }
}
