import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Palette} from '../../styles/theme'

@Component({
  selector: 'kkl-title',
  templateUrl: './kkl-title.component.html',
  styleUrls: ['./kkl-title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() label: string;
  @Input() color: Palette;
  @Input() alignment: string;
  @Input() gap: number;
  @Input() template: ElementRef;

  constructor() {}

  ngOnInit(): void {}
}
