import { Component, Input, TemplateRef } from '@angular/core';
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
  selector: 'kkl-display-grid',
  templateUrl: './display-grid.component.html',
  styleUrls: ['./display-grid.component.scss'],
})
export class DisplayGridComponent<T> {
  @Input() displayData!: DisplayData<T>[];
  @Input() data!: T;
  @Input() templates: { [key: string]: TemplateRef<any> } = {};

  data$!: Observable<T>;

  constructor() {}
}
