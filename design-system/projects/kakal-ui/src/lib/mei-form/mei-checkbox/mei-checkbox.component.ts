import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { KklFormActions, KklFormChangeEvent } from '../models/kkl-form-events';

@Component({
  selector: 'kkl-checkbox',
  templateUrl: './mei-checkbox.component.html',
  styleUrls: ['./mei-checkbox.component.scss']
})
export class MeiCheckboxComponent implements OnInit {

  @Input() control!: FormControl;
  @Input() key!: string;
  @Input() label!: string;

  // error$: BehaviorSubject<string>;

  @Output() selectChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();

  constructor(
  ) {}

  ngOnInit(): void {
  }

  onToggleChange(event) {
    this.selectChanged.emit({
      key: this.key,
      value: event.checked,
      action: KklFormActions.TOGGLE_CHANGED
    });
  }

}
