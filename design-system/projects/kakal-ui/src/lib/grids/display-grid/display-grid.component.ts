import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { DisplayData } from '../../groups/display-group/display-group.component';

@Component({
  selector: 'kkl-display-grid',
  templateUrl: './display-grid.component.html',
  styleUrls: ['./display-grid.component.scss'],
})
export class DisplayGridComponent<T> implements OnInit {
  @Input() data: any = {};
  @Input() displayData!: DisplayData<T>[];
  @Input() templates: { [key: string]: TemplateRef<any> } = {};

  constructor() {}

  ngOnInit(): void {}
}
