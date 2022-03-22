import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'pl-form-date-calendar',
  templateUrl: './form-date-calendar.component.html',
  styleUrls: ['./form-date-calendar.component.scss']
})
export class FormDateCalendarComponent implements OnInit {
  // ********** TEST COMPONENT !!! ***************** //
  month: number;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  // EXAMPLE
  @Input() data:any[] = [
    { date: new Date("2022-03-01"), text: "one text", occupancy: 4 },
    { date: new Date("2022-03-20"), text: "another text", occupancy: 3 },
    { date: new Date("2022-04-20"), text: "another text", occupancy: 3 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  dateClass(): MatCalendarCellClassFunction<Date> {
    return (date: Date) => {
      if(!this.month) {
        this.month = date.getMonth() +1;
        console.log('emit');
      }
      if(this.month !== date.getMonth() +1) {
        this.month = date.getMonth() +1;
        console.log('emit');
      }
      return this.changeMonth(date);
    };
  };
  changeMonth(date: Date) {
    const [filter] = this.data.filter(item => this.compareDates(item.date, date));
    if (filter) {
      this.changeInnerContent(filter);
      return 'example-custom-date-class';
    }
  }
  compareDates(first: Date, second: Date) {
    if (first.getFullYear() !== second.getFullYear()) return false;
    if (first.getMonth() !== second.getMonth()) return false;
    if (first.getDate() !== second.getDate()) return false;
    return true;
  }

  changeInnerContent(object: any) {
    setTimeout(() => {
      const cells = Array.from(document.querySelectorAll<HTMLDivElement>('.mat-calendar .mat-calendar-body-cell-content'));
      const [cell] = cells.filter(cell => +cell.outerText == object.date.getDate()) as HTMLDivElement[];
      cell.innerText = cell.innerText + `\n${object.occupancy}`;
    });
  }

}