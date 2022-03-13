import { Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'kkl-open-motions',
  templateUrl: './open-motions.component.html',
  styleUrls: ['./open-motions.component.scss']
})
export class OpenMotionsComponent implements OnInit {
  @Input() public title: string;
  @Input() public content: TemplateRef<any>;
  @Input() public direction: 'right' | 'left' = 'left';
  @Output() public closeEvent: EventEmitter<void> = new EventEmitter();

  public iconDirection: string;


  constructor() { }

  ngOnInit(): void {
    this.iconDirection = `close-box icon-${this.direction}`;
  }

  close() {
    this.closeEvent.emit();
  }

}
