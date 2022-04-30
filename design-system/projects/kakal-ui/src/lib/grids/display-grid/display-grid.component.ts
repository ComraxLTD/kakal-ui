import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { DisplayType, DisplayItem } from '../../display-data/display-data.component';

@Component({
  selector: 'kkl-display-grid',
  templateUrl: './display-grid.component.html',
  styleUrls: ['./display-grid.component.scss'],
})
export class DisplayGridComponent<T> implements OnInit {
  @Input() variant : DisplayType
  @Input() data: any = {};
  @Input() displayData!: DisplayItem<T>[];
  @Input() templates: { [key: string]: TemplateRef<any> } = {};

  @Input() cols: number = 4;

  constructor() {}

  ngOnInit(): void {}
}
