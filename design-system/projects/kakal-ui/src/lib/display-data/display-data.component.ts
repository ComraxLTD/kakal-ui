import { Component, Input, OnInit } from '@angular/core';

export interface DisplayData<T = any> {
  key: keyof T;
  label: string;
  value?: any;
  format?: string;
  icon?: string;
}

@Component({
  selector: 'kkl-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss'],
})
export class DisplayDataComponent implements OnInit {

  @Input() data: DisplayData[] ;
  @Input() type: 'table' | 'default' | 'input' = 'default';

  constructor() {}

  ngOnInit(): void {
    if (!Array.isArray(this.data)) this.data = [this.data];
  }
}
