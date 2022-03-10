import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'kkl-form-counter',
  templateUrl: './form-counter.component.html',
  styleUrls: ['./form-counter.component.scss']
})
export class KKLFormCounterComponent implements OnInit {
  @Input() control: FormControl;
  @Input() icon: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
    if (!this.control.value) this.control.setValue(0);
  }
  decrease() {
    const value = this.control.value;
    if (value == 0) return;
    this.control.setValue(value - 1);
  }
  increase() {
    const value = this.control.value;
    this.control.setValue(value + 1);
  }

}
