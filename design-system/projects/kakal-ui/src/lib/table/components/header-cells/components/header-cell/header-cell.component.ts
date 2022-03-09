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
    if (this.column.filterType) {
      this.filterTemplate = {
        [this.column.columnDef]: this.filterHeaderTemplate,
      };
    }
  }

  public onMenuOpen() {
    this.fetchOptions.emit(this.columnDef);
  }
}
