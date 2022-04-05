import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, Observable, of } from 'rxjs';
import { Step } from '../../../kakal-ui/src/lib/vertical-steps/step/step.model';
import {
  FormDataSource,
  FormService,
  TableBase,
  CardInfoModel,
  CardStepModel,
  Panel,
  FormChangeEvent,
  Range,
  FormCalendarService,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FormDataSource],
})
export class AppComponent implements OnInit {
  key: string = 'myDatePicker';
  constructor(private formService: FormService,private formCalendarService:FormCalendarService) {}
  public onRangeChanged(event: FormChangeEvent<Range<Date>>) {
  }
  ngOnInit(): void {

    this.formCalendarService.dateRange.get('sleepingPlace').valueChanges.subscribe(val => {
      
      this.data = [
      
        { date: this.getDay(), occupancy: 2 },
        { date: this.getDay(), occupancy: 2 },
        { date: this.getDay(), occupancy: 3 },
      ];
    });


  //   this.formCalendarService.dateRange.valueChanges.pipe(distinctUntilChanged()).subscribe(value=>{this.data = [
      
  //     { date: this.getDay(), occupancy: 2 },
  //     { date: this.getDay(), occupancy: 2 },
  //     { date: this.getDay(), occupancy: 3 },
  //   ];
  //   console.log(value)
  // }
  //   )
  }
  data = [
    { date: this.getDay(), occupancy: 40 },
    { date: this.getDay(), occupancy: 40 },
    { date: this.getDay(), occupancy: 3 },
  ];
  getDay(): Date {
    const date = new Date();
    date.setDate(Math.floor(Math.random() * 27));
    return date;
  }
}
