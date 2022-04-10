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

  eventClicked(event) {
    console.log(event);
  }
  //calendar 
  arr = [
    {
      backgroundColor: "#F0F6FE",
      start: "2022-04-10",
      // end: "2022-04-10T09:00",
      editable: true,
      svg: "tree",
      textColor: "black",
      title: "מגרש ספורט",
      type: "facility",
    },
    {
      backgroundColor: "#F0F6FE",
      start: "2022-04-10T08:00",
      end: "2022-04-10T09:00",
      editable: true,
      svg: "tree",
      textColor: "black",
      title: "מגרש ספורט",
      type: "facility"
    },
    {
      backgroundColor: "#F0F6FE",
      start: "2022-04-10T09:00",
      end: "2022-04-10T10:00",
      editable: true,
      svg: "tree",
      textColor: "black",
      title: "מגרש ספורט",
      type: "activity"
    }
  ]

  //
  component = CardAddComponent;
  cards = [
    { title: '1', content: 'test' },
    { title: '2', content: 'test' },
    { title: '3', content: 'test' },
    { title: '4', content: 'test' },
    { title: '5', content: 'test' },
    { title: '6', content: 'test' },
    { title: '7', content: 'test' },
    { title: '8', content: 'test' },

  ]


  ngOnInit(){
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
