import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SortDirection } from '@angular/material/sort';
import { HeaderCellModel } from '../../models/header-cell.model';

@Component({
  selector: 'pl-filter-select-cell',
  templateUrl: './filter-select-cell.component.html',
  styleUrls: ['./filter-select-cell.component.scss'],
})
export class FilterSelectCellComponent implements OnInit {
  @Input() column: HeaderCellModel;

  public control: FormControl = new FormControl();

  @Output() selectChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onSortChange(event: SortDirection) {
    console.log(event);
  }
}
