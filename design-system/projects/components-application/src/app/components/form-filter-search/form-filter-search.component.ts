import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-filter-search',
  templateUrl: './form-filter-search.component.html',
  styleUrls: ['./form-filter-search.component.scss']
})
export class FormFilterSearchComponent implements OnInit {

  public control : FormControl

  constructor() { }

  ngOnInit(): void {
    this.control = new FormControl()
  }

}
