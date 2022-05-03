import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'kkl-open-motions',
  templateUrl: './open-motions.component.html',
  styleUrls: ['./open-motions.component.scss']
})
export class OpenMotionsComponent implements OnInit {
  @Input() title: string;
  @Input() content: TemplateRef<any>;
  @Input() direction: 'right' | 'left' = 'left';

  @Output() closeEvent: EventEmitter<void> = new EventEmitter();

  public iconDirection: string;


  constructor() { }

  ngOnInit(): void {
    this.iconDirection = `close-box icon-${this.direction}`;
  }

  close() {
    this.closeEvent.emit();
  }

}
