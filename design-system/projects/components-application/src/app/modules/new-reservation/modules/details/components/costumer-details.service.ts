import { Injectable } from '@angular/core';
import { Question } from '../../../../../../../../kakal-ui/src/public-api';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

// set questions array for the advanced form
private questions: Question[] = [
  // first object for the general search
  // key must be search!
  {
    key: 'search',
    controlType: 'autocomplete',
  },
  {
    key: 'city',
    label: 'עיר',
    controlType: 'autocomplete',
  },
  {
    key: 'calendar',
    label: 'סוג לקוח',
    controlType: 'autocomplete',
  }
];

private searchLookupMap: {
  [key: string]: keyof any;
} = {
  search: 'SearchStr',
  city: 'city',
  costumerType: 'costumerType',
};

constructor() {}

public getFormQuestions() {
  return [...this.questions];
}

public getSearchLookupMap() {
  return { ...this.searchLookupMap };
}}
