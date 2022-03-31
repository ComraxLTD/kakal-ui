import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kkl-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {
  @Input() data: { label: string, value: string | number, icon?: string }[]
    | { label: string, value: string | number, icon?: string } = [];
  @Input() type: 'table' | 'default' | 'input' = 'default';

  constructor() { }

  ngOnInit(): void {
    if (!Array.isArray(this.data)) this.data = [this.data];
  }

}
