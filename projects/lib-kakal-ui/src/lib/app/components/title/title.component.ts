import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kkl-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() text: string;
  @Input() title: boolean;
  @Input() slots: {};

  constructor() { }

  ngOnInit(): void {
    this.title = this.title || false;
  }
}
