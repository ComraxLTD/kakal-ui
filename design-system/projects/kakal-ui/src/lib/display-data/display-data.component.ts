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
  fakeDATA = [{ label: 'test', value: 'test' }, { label: 'יתרה פיננסית :', value: '143,300', icon: 'tree' }];
  ngOnInit(): void {
    this.data = this.fakeDATA;
    if (!Array.isArray(this.data)) this.data = [this.data];
    this.type = 'input';
  }

}
