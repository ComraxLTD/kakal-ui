import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kkl-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() text: string;
  @Input() slot: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
}
