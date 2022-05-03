import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  DisplayType,
  DisplayItem,
} from '../../display-data/display-data.component';

@Component({
  selector: 'kkl-display-group',
  templateUrl: './display-group.component.html',
  styleUrls: ['./display-group.component.scss'],
})
export class DisplayGroupComponent<T> {

  @Input() variant: DisplayType;

  @Input() displayData!: DisplayItem<T>[];
  @Input() data!: T;
  @Input() templates: { [key: string]: TemplateRef<any> } = {};

  data$!: Observable<T>;

  @Output() action: EventEmitter<DisplayItem<T>> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onAction(item: DisplayItem<T>) {
    this.action.emit(item);
  }
}
