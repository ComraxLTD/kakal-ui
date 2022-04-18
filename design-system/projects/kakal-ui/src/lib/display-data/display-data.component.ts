import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface DisplayData<T = any> {
  key: keyof T;
  label: string;
  value?: any;
  format?: { type: string; args: any };
  icon?: string;
  template?: string;
}

@Component({
  selector: 'kkl-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss'],
})
export class DisplayDataComponent<T = any> implements OnInit {

  @Input() data: T;
  @Input() template: DisplayData<T>[];
  @Input() type: 'table' | 'default' | 'input' = 'default';

  constructor() {}

  ngOnInit(): void {
    // if (!Array.isArray(this.data)) this.data = [this.data];
  }
}
