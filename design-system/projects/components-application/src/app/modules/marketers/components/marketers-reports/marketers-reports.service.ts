import { Injectable } from '@angular/core';
import { ControlBase } from '../../../../../../../kakal-ui/src/public-api';

@Injectable({
  providedIn: 'root',
})
export class MarketersReportsService {
  options: any[] = [
    { label: 'test', value: 0 },
    { label: 'test1', value: 1 },
  ];
  questions: ControlBase[] = [
    {
      key: 'period',
      label: 'תקופה',
      controlType: 'select',
      options: this.options,
    },
    {
      key: 'period',
      label: 'תקופה',
      controlType: 'select',
      options: this.options,
    },
    {
      key: 'period',
      label: 'תקופה',
      controlType: 'select',
      options: this.options,
    },
    {
      key: 'period',
      label: 'תקופה',
      controlType: 'select',
      options: this.options,
    },
    {
      key: 'period',
      label: 'תקופה',
      controlType: 'select',
      options: this.options,
    },
    {
      key: 'period',
      label: 'תקופה',
      controlType: 'select',
      options: this.options,
    },
    {
      key: 'period',
      label: 'תקופה',
      controlType: 'select',
      options: this.options,
    },
    {
      key: 'period',
      label: 'תקופה',
      controlType: 'select',
      options: this.options,
    },
    {
      key: 'period',
      label: 'תקופה',
      controlType: 'select',
      options: this.options,
    },
    {
      key: 'period',
      label: 'תקופה',
      controlType: 'select',
      options: this.options,
    },
    {
      key: 'period',
      label: 'תקופה',
      controlType: 'select',
      options: this.options,
    },
  ];
  
  tabs:{value:string,label:string}[]=[
    {value:'general',label:'כללי'},
    {value:'guide',label:'הדרכה'},
    {value:'filedCenter',label:'מרכז שדה'},
    {value:'finence',label:'פיננסים'},
    {value:'additionalArea',label:'קטגוריה נוספת'},
    {value:'additionalArea',label:'קטגוריה נוסםת'},
  ]
  constructor() {}


  getTabs():{value:string,label:string}[]{
    return [...this.tabs]
  }

  getQuestions():ControlBase[]{
    return [...this.questions]
  }
}
