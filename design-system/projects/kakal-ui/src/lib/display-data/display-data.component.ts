import { Component, OnInit } from '@angular/core';

export interface DisplayItem<T = any> {
  key: keyof T;
  label: string;
  format?: { type: string; args: any };
  icon?: string;
  template?: string;
  type?: 'action' | 'type';
}

export declare type DisplayType = 'form' | 'table' | 'display';

@Component({
  selector: 'pl-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
