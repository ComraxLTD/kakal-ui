



import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StatusBarsModel } from '../../../kakal-ui/src/lib/status-bars/status-bars.model';
import { RowActionModel, TableBase } from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  control: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }




}
