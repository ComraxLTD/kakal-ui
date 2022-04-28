import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { Observable } from 'rxjs';

export interface DisplayData<T = any> {
  key: keyof T;
  label: string;
  value?: any;
  format?: { type: string; args: any };
  icon?: string;
  template?: string;
  type?: 'action' | 'type';
}

@Component({
  selector: 'kkl-display-group',
  templateUrl: './display-group.component.html',
  styleUrls: ['./display-group.component.scss'],
})
export class DisplayGroupComponent<T> {
  @Input() displayData!: DisplayData<T>[];
  @Input() data!: T;
  @Input() templates: { [key: string]: TemplateRef<any> } = {};

  @Input() gap: number;

  data$!: Observable<T>;

  @Output() action: EventEmitter<DisplayData<T>> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log(this.data)
    console.log(this.displayData)
  }

  onAction(item: DisplayData<T>) {
    this.action.emit(item);
  }
}
