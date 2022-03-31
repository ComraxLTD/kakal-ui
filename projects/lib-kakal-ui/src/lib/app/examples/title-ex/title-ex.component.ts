import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kkl-title-ex',
  templateUrl: './title-ex.component.html',
  styleUrls: ['./title-ex.component.scss']
})
export class TitleExComponent implements OnInit {

  @Input() text: string;
  @Input() slot: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}
