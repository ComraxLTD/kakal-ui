import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Color } from '../../styles/theme';

@Component({
  selector: 'kkl-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() text: string;
  @Input() alignment: string;
  @Input() gap: number;
  @Input() size: number;
  @Input() color: Color;
  @Input() outlet: ElementRef;
  constructor() {}

  ngOnInit(): void {}
}
