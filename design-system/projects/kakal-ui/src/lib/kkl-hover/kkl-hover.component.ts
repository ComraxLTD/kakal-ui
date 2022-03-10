import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'kkl-hover',
  templateUrl: './kkl-hover.component.html',
  styleUrls: ['./kkl-hover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('hover', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class KKLHoverComponent implements OnInit {
  @Input() public text:string = '';
  @Input() template:TemplateRef<any>;
  @Input() hoverColor:'white' | 'black';
  
  constructor() { }

  ngOnInit(): void {
  }

}