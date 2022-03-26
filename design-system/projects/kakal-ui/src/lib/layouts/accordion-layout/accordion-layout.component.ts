import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { Observable } from 'rxjs';
import { AccordionDataSource } from './accordion-datasource';
import { AccordionPanel, AccordionState } from './accordion-types';

@Component({
  selector: 'kkl-accordion-layout',
  templateUrl: './accordion-layout.component.html',
  styleUrls: ['./accordion-layout.component.scss'],
  providers: [AccordionDataSource],
})
export class AccordionLayoutComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  @Input() panels: AccordionPanel[];
  @Input() accordionState: AccordionState;
  @Input() buttonLabel: string;

  accordionState$: Observable<AccordionState>;

  @Output() closed: EventEmitter<void> = new EventEmitter();
  @Output() opened: EventEmitter<void> = new EventEmitter();

  constructor(private accordionDataSource: AccordionDataSource) {}

  ngOnInit(): void {
    this.accordionState$ = this.accordionDataSource.listen();
  }

  public onPanelClosed() {
    this.closed.emit();
  }

  public onPanelOpen() {
    this.opened.emit();
  }

  public expandAll(changeEvent: MatCheckboxChange) {
    changeEvent.checked ? this.accordion.openAll() : this.accordion.closeAll();
  }
}
