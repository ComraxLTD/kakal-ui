import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { DisplayData } from '../../groups/display-group/display-group.component';

@Component({
  selector: 'kkl-display-grid',
  templateUrl: './display-grid.component.html',
  styleUrls: ['./display-grid.component.scss'],
})
export class DisplayGridComponent<T> implements OnInit {
  @Input() variant : 'form' | 'table' | 'default' = 'default'
  @Input() data: any = {};
  @Input() displayData!: DisplayData<T>[];
  @Input() templates: { [key: string]: TemplateRef<any> } = {};

  @Input() cols: number = 4;

  constructor() {}

  ngOnInit(): void {}
}
