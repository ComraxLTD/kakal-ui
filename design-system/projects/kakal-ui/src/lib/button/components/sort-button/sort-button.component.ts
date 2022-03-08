import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SortDirection } from '@angular/material/sort';

@Component({
  selector: 'kkl-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss'],
})
export class SortButtonComponent implements OnInit {

  @Input() sortDir: SortDirection;

  @Output() sortChange: EventEmitter<SortDirection> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  public onSortChange() {
    // const newDir = this.sortDir === 'asc' ? 'desc' : 'asc';
    this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
    this.sortChange.emit(this.sortDir);
  }
}
