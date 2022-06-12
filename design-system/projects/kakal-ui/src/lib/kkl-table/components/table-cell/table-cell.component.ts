import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { IconService } from '../../../icon/icons.service';
import { TableBase } from '../../models/table.model';

@Component({
  selector: 'kkl-table-cell',
  templateUrl: './table-cell.component.html',
})
export class TableCellComponent implements OnInit {
  @Input() column!: TableBase;
  @Input() row!: any;
  @Input() data!: any;

  @Input() colsTemplate: { [key: string]: TemplateRef<any> } = {};

  columnKey!: string;

  isSvg!: boolean;
  hasIcon!: boolean;

  constructor(private iconService: IconService) {}

  @Output() actionClicked = new EventEmitter<void>();

  ngOnInit(): void {
    if (this.column.button && this.column.button.icon) {
      this.isSvg = this.iconService.setIcon(this.column.button.icon);
    }
    this.columnKey = this.column.key;
  }

  onClick() {
    this.actionClicked.emit();
  }
}
