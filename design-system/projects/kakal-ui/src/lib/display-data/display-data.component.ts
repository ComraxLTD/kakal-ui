import { Component, OnInit } from '@angular/core';

export interface DisplayItem<T = any> {
  // ** use for extract data from the give data object **
  key: keyof T;

  // ** use for upper string **
  label?: string;

  // ** use to format value. type : desired pipe name, args :  **
  format?: { type: string; args?: any };

  svgIcon?: string;

  // ** type of value ui **
  type?: 'action' | 'status' | 'icon' | 'template';
}

export declare type DisplayType = 'form' | 'table' | 'display';

@Component({
  selector: 'kkl-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss'],
})
export class DisplayDataComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
