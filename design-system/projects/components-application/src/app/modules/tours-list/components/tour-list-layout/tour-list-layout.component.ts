import { Component, OnInit } from '@angular/core';
import { ControlBase } from '../../../../../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-tour-list-layout',
  templateUrl: './tour-list-layout.component.html',
  styleUrls: ['./tour-list-layout.component.scss']
})
export class TourListLayoutComponent implements OnInit {
  questions: ControlBase[] = [
    {
      key: 'autocomplete',
      controlType: 'autocomplete',
      options: [
        { label: 'test', value: 0 },
        { label: 'test1', value: 1 },
        { label: 'test2', value: 2 },
        { label: 'test3', value: 3 },
      ],
      label: 'local autocomplete',
    },
  ];

  editData = {
    select: { label: 'editData', value: 'editData' }
  }
  constructor() { }

  ngOnInit(): void {
  }

  onQueryChanged(event:any) {
    console.log(event);
  }

  onSelectChanged(event:any) {
    console.log(event);
  }

  onOpenChanged(event:any) {
    console.log(event);
  }

}
