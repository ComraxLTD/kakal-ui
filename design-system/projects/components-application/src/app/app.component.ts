import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase } from '../../../kakal-ui/src/public-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  options = [{ label: 'test', value: 0 },
  { label: 'test1', value: 1 }]
  // control = new FormControl(null);
editData;
  questions: ControlBase[] = [
    {
      key: 'autocomplete',
      controlType: 'autocomplete',
      label: 'select',
      multi: true,
      options: [{ label: 'test', value: 0 }],
      valueChanged: (eve) => {console.log(this.editData);}
    },
    // {
    //   key: 'email',
    //   controlType: 'email',
    // },
    // {
    //   key: 'autocomplete',
    //   controlType: 'autocomplete',
    //   options: [{ label: 'test', value: 0 }],
    // },
    // {
    //   key: 'phone',
    //   controlType: 'phone',
    // },
    // {
    //   key: 'counter',
    //   controlType: 'counter',
    //   // disabled: true
    // },
    // {
    //   key: 'gggg',
    //   controlType: 'format',
    //   format: '\D'
    // },
    // {
    //   key: 'number',
    //   controlType: 'number',
    // },
    // {
    //   key: 'password',
    //   controlType: 'password',
    // },
    // {
    //   key: 'dateRange',
    //   controlType: 'dateRange',
    // },
  ];

  ngOnInit(){
    setTimeout(() => {
    //   console.log(this.formgroup);
      this.editData = {number: 65657};
    //   this.questions = this.questions.concat([{
    //       key: 'password',
    //       controlType: 'password',
    //     }]);
    }, 4000);
  }

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
