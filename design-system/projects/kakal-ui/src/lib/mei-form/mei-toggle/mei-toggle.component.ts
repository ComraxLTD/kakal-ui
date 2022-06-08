import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { KklFormChangeEvent, KklFormActions } from '../models/kkl-form-events';

@Component({
  selector: 'kkl-slide-toggle',
  templateUrl: './mei-toggle.component.html',
  styleUrls: ['./mei-toggle.component.scss']
})
export class MeiToggleComponent implements OnInit {

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
