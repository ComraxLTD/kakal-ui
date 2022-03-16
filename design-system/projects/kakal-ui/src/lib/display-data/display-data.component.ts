import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kkl-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {
  @Input() data: { label: string, value: string | number }[];
  @Input() type: 'table' | 'default' | 'input';

  constructor() { }
  fakeDATA = [{ label: 'test', value: 'test' }, { label: 'test', value: 'test' }];
  ngOnInit(): void {
    this.data = this.fakeDATA;
    this.type = 'input';
  }

}
