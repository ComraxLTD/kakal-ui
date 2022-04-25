import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatAccordion } from '@angular/material/expansion';
import { AccordionDataSource } from './accordion-datasource';
import { Panel, AccordionState } from './accordion-types';
import { Observable } from 'rxjs';

@Component({
  selector: 'kkl-accordion-layout',
  templateUrl: './accordion-layout.component.html',
  styleUrls: ['./accordion-layout.component.scss'],
  providers: [AccordionDataSource],
})
export class AccordionLayoutComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  @Input() panels: Panel[];
  @Input() buttonLabel: string ="jhj";
  @Input() templates: { [key: string]: TemplateRef<any> };

  @Output() actionClicked: EventEmitter<void> = new EventEmitter();

  sizeIndexMap: { [key: number]: number } = {
    0: 2,
    1: 1.8,
  };

  weightIndexMap: { [key: number]: number } = {
    0: 600,
  };

  constructor() {}

  ngOnInit(): void {
  }


  public expandAll(changeEvent: MatCheckboxChange) {
    changeEvent.checked ? this.accordion.openAll() : this.accordion.closeAll();
  }

  onClick() {
    this.actionClicked.emit();
  }
}
