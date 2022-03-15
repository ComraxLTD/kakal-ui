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
import { FormControl } from '@angular/forms';
import { FormChangeEvent } from '../../../../../form/models/form.types';
import { TableDataSource } from '../../../../models/table-datasource';
import { HeaderCellModel } from '../../models/header-cell.model';
import { FilterChangeEvent, FilterRange } from '../../models/header.types';

@Component({
  selector: 'kkl-header-cell',
  templateUrl: './header-cell.component.html',
  styleUrls: ['./header-cell.component.scss'],
})
export class HeaderCellComponent implements OnInit {
  @Input('itemKey') key: string;
  @Input() column: HeaderCellModel;
  @Input() label: string;
  @Input() columnDef: string;
  @Input() headerTemplate: { [key: string]: TemplateRef<any> } = {};

  constructor() {}

  ngOnInit(): void {}
}
