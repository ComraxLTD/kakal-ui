import { Component, Input, OnInit, TemplateRef } from '@angular/core';

export interface DataCell<T = any> {
  key: keyof T;
  label: string;
  value?: any;
  format?: { type: string; args: any };
  icon?: string;
  template?: string;
}

@Component({
  selector: 'kkl-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent<T> implements OnInit {
  @Input() data: any = {};
  @Input() displayData!: DataCell<T>[];
  @Input() templates: { [key: string]: TemplateRef<any> } = {};

  constructor() {}

  ngOnInit(): void {}
}
