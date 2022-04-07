import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { QuestionBase } from '../../../kakal-ui/src/public-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  questions: QuestionBase[] = [
    // {
    //   key: 'select',
    //   controlType: 'select',
    //   label: 'select',
    //   options: [{ label: 'test', value: 0 }],
    // },
    // {
    //   key: 'email',
    //   controlType: 'email',
    // },
    // {
    //   key: 'phone',
    //   controlType: 'phone',
    // },
    // {
    //   key: 'tel',
    //   controlType: 'tel',
    // },
    // {
    //   key: 'time',
    //   controlType: 'time',
    // },
    {
      key: 'textarea',
      controlType: 'textarea',
    },
    {
      key: 'number',
      controlType: 'number',
    },
    {
      key: 'password',
      controlType: 'password',
    },
    {
      key: 'text',
      controlType: 'text',
    },
  ];

  onQueryChanged(event){
    console.log(event);
  }
  onSelectChanged(event){
    console.log(event);
  }
  onOpenChanged(event){
    console.log(event);
  }
  onValueChanged(event){
    console.log(event);

  }

}
