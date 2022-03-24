import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'components-application';
  constructor() { }
  data = [{key:'First',label:'בדיקה'},{key:'Second',label:'test'},{key:'Third',label:'עמוד 3'}];
  
  ngOnInit(): void {
  }

}
