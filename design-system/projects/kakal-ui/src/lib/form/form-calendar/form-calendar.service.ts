import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormCalendarService {

  public dateRange = new FormGroup({
    sleepingPlace:new FormControl(),
    start: new FormControl(),
    end: new FormControl(),
  });


  constructor() { 
   
  }

}
