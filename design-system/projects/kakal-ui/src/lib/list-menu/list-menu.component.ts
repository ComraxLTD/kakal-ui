import { Direction } from '@angular/cdk/bidi';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'kkl-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class KKLListMenuComponent implements OnInit {
  @Input() options: any[];
  @Input() optionTemplate:TemplateRef<any>;

  @Output() emitOption: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  emitClick(event): void {    
    this.emitClick(event);
  }

}
