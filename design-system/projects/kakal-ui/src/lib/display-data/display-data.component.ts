import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'kkl-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss'],
})
export class DisplayDataComponent implements OnInit {

  @Input() data: any;
  @Input() template: any[];
  @Input() type: 'table' | 'default' | 'input' = 'default';

  constructor() {}

  ngOnInit(): void {
    // if (!Array.isArray(this.data)) this.data = [this.data];
  }
}
