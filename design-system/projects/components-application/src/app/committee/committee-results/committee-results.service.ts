import { Injectable } from '@angular/core';
import { Question } from '../../../../../kakal-ui/src/public-api';

@Injectable({
  providedIn: 'root',
})
export class CommitteeResultsService {
  // set questions array for the advanced form
  private questions: Question[] = [
    // key must be search!
    {
      key: 'search',
      controlType: 'autocomplete',
      options : [],
    },
    {
      key: 'committeeId',
      label: 'מס ועדה',
    },
    {
      key: 'remiTikOptions',
      label: 'מס תיק רמ"י',
      controlType: 'autocomplete',
      options : [],
    },
    {
      key: 'gushOptions',
      label: 'גוש',
      controlType: 'autocomplete',
      options : [],
    },
    {
      key: 'chelkaOptions',
      label: 'חלקה',
      controlType: 'autocomplete',
      options : [],
      gridProps: { offset: 'none' },
    },
    {
      key: 'observerOptions',
      label: 'שם משקיף',
      controlType: 'select',
      options : [],
    },
    {
      key: 'migrashOptions',
      label: 'מגרש',
      controlType: 'autocomplete',
      options : [],
    },
    {
      key: 'tabaNumOptions',
      label: 'מס תב"ע',
      controlType: 'autocomplete',
      options : [],
    },
    {
      key: 'regionOptions',
      label: 'מרחב',
      controlType: 'select',
      options : [],
      gridProps: { offset: 'none' },
    },
  ];

  private searchLookupMap: {
    [key: string]: keyof any;
  } = {
    search: 'SearchStr',
    committeeId: 'CommitteeId',
    remiTikOptions: 'RemiFileOption',
    gushOptions: 'GushOption',
    chelkaOptions: 'ChelkaOption',
    observerOptions: 'ObserverOption',
    migrashNumOptions: 'MigrashOption',
    tabaNumOptions: 'TabaOption',
    regionOptions: 'RegionOption',
  };

  constructor() {}

  public getFormQuestions() {
    return [...this.questions];
  }

  public getSearchLookupMap() {
    return { ...this.searchLookupMap };
  }
}
