import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kkl-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {
  @Output() removed: EventEmitter<void> = new EventEmitter();
  @Input() removable: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.removable = this.removable !== undefined;
  }

  handleRemoved() {
    this.removed.emit();
  }
}
