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

  constructor() {}

  ngOnInit(): void {}

  public onClick() {
    this.expended = !this.expended;
  }
}
