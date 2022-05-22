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
import { Panel } from './accordion-types';
import { BreakpointService } from '../../../services/breakpoint.service';
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
  @Input() buttonLabel: string ="";
  @Input() templates: { [key: string]: TemplateRef<any> };

  @Output() actionClicked: EventEmitter<void> = new EventEmitter();

  sizeIndexMap: { [key: number]: number } = {
    0: 2,
    1: 1.8,
  };

  weightIndexMap: { [key: number]: number } = {
    0: 600,
  };

  mobile$ : Observable<boolean>

  constructor(
    private breakpointService : BreakpointService
  ) {}

  ngOnInit(): void {

    this.mobile$ = this.breakpointService.isMobile()
  }


  public expandAll(changeEvent: MatCheckboxChange) {
    changeEvent.checked ? this.accordion.openAll() : this.accordion.closeAll();
  }

  onClick() {
    this.actionClicked.emit();
  }
}
