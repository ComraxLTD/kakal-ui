import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CardAddComponent } from '../../../kakal-ui/src/lib/cards/card-add/card-add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  actions = [{ svgIcon: 'edit' }, { svgIcon: 'delete' }];

  cards = {
    1: {
      id: 1,
      svgIcon: 'home',
      category: 'הסכם חליפין',
    },
    2: {
      id: 2,
      svgIcon: 'home',
      category: 'הסכם רכישה',
    },
    3: {
      id: 3,
      svgIcon: 'home',
      category: 'הסכם מכר',
    },
  };

  eventClicked(event) {
    console.log(event);
  }
  //calendar
  arr = [
    {
      backgroundColor: '#F0F6FE',
      start: '2022-04-10',
      // end: "2022-04-10T09:00",
      editable: true,
      svg: 'tree',
      textColor: 'black',
      title: 'מגרש ספורט',
      type: 'facility',
    },
    {
      backgroundColor: '#F0F6FE',
      start: '2022-04-10T08:00',
      end: '2022-04-10T09:00',
      editable: true,
      svg: 'tree',
      textColor: 'black',
      title: 'מגרש ספורט',
      type: 'facility',
    },
    {
      backgroundColor: '#F0F6FE',
      start: '2022-04-10T09:00',
      end: '2022-04-10T10:00',
      editable: true,
      svg: 'tree',
      textColor: 'black',
      title: 'מגרש ספורט',
      type: 'activity',
    },
  ];

  //
  component = CardAddComponent;


  ngOnInit() {
    // setTimeout(() => {
    //   console.log(this.formgroup);
    // this.editData = {number: 65657};
    //   this.questions = this.questions.concat([{
    //       key: 'password',
    //       controlType: 'password',
    //     }]);
    // }, 4000);
  }
}
