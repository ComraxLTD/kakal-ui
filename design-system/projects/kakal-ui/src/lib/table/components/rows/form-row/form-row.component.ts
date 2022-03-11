import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pl-form-row',
  templateUrl: './form-row.component.html',
  styleUrls: ['./form-row.component.scss'],
})
export class FormRowComponent implements OnInit {
  @Input() columns;

  constructor() {}

  ngOnInit(): void {}
}
