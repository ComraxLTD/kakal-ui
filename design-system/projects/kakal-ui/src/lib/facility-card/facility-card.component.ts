import { Component, Input, OnInit } from '@angular/core';
import { FacilityCardInterface } from './facility-card.model';

@Component({
  selector: 'kkl-facility-card',
  templateUrl: './facility-card.component.html',
  styleUrls: ['./facility-card.component.scss']
})
export class FacilityCardComponent implements OnInit {
  occupiedHoursArray: { totalHours?: number; user?: string }[] = [];
  @Input() data: FacilityCardInterface[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createOccupiedHoursArray();
  }

  createOccupiedHoursArray() {
    let startingHour = 0;

    this.data?.map((hour) => {
      if (startingHour < hour.startingHour) {
        this.occupiedHoursArray.push({
          totalHours: hour.startingHour - startingHour,
          user: 'none',
        });
      }

      this.occupiedHoursArray.push({
        totalHours: hour.totalTime,
        user: hour.user,
      });
      startingHour = hour.endingHour;
    });

    if (startingHour < 24) {
      this.occupiedHoursArray.push({
        totalHours: 24 - startingHour,
        user: 'none',
      });
    }
  }

  calculateWidth(totalHours: number): string {
    const totalHoursPrecent = (totalHours / 24) * 100;

    return `${totalHoursPrecent}%`;
  }

}
