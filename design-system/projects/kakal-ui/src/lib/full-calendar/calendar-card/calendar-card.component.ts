import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kkl-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss'],
})

export class CalendarCardComponent implements OnInit {
  constructor() { }

  @Input() public props!: any;
  public checkHour: boolean;

  ngOnInit(): void {
    // this.props.timeText= "09:00 - 10:00";
    // this.checkTimes();    
  }
  // private checkTimes(): void {
  //   const split = this.props.timeText.split(' - ');
  //   console.log(split);
    
  //   const hours = split.map(item => {
  //     return item.split(':');
  //   });

  //   const compareHour = +hours[0][0] == +hours[1][0];
  //   const compareHalfHour = +hours[0][0] + 1 == +hours[1][0];
        
  //   if (compareHour) {
  //     this.checkHour = true;
  //   }

  //   if (!compareHour && compareHalfHour) {
  //     const totalMinutes = this.compareMinutes(hours);
  //     if (totalMinutes < 60) {
  //       this.checkHour = true;
  //     }
  //   }
  // }
  // private compareMinutes(hours: any[]): number {
  //   const startMinutes = +hours[0][1];
  //   const endMinutes = +hours[1][1];
  //   return Math.abs(startMinutes - 60) + endMinutes;
  // }
}
