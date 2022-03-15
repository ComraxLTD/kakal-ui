import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'kkl-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss'],
})
export class FormSearchComponent implements OnInit {
  @Input() public control: FormControl;
  @Input() public expended: boolean = true;

  @Input() inRow: number = 3;

  constructor() {}

  public inputs = [1, 2, 3, 4, 5, 5, 6, 6, 6, 7, 7, 8];
  public flex: number;

  ngOnInit(): void {
    this.flex = 100 / this.inRow;
  }

  public onClick() {
    this.expended = !this.expended;
  }
}
