import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TableBase, SelectOption, RouterService, ROOT_PREFIX, MODULE_PREFIX, FormChangeEvent } from '../../../../../kakal-ui/src/public-api';

import { OPTIONS, RECORDS_RESULT_TABLE } from './records-results-data';

@Component({
  selector: 'app-records-results',
  templateUrl: './records-results.component.html',
  styleUrls: ['./records-results.component.scss'],
})
export class RecordsResultsComponent implements OnInit {
  dataSource: any[] = RECORDS_RESULT_TABLE;

  // set questions array for the advanced form
  columns: TableBase[] = [
    {
      key: 'caseId',
      label: 'מס תיק',
      button: { type: '', icon: '' },
    },
    {
      key: 'estateDetails',
      label: 'פירוט הנכס',
      button: { type: 'inlineExpand', icon: 'keyboard_arrow_down' },
    },
    {
      key: 'dealName',
      label: 'שם העסקה',
    },
    {
      key: 'date',
      controlType: 'date',
      label: 'תאריך חתימה',
    },
    {
      key: 'timeToDo',
      label: 'זמן לביצוע',
    },

    { key: 'status', label: 'סטטוס', templateName: 'status' },
    { key: 'action', label: '', templateName: 'action', filter: false },
  ];

  //  FORM PROPS

  control!: FormControl;
  options!: SelectOption[];

  constructor(
    private routerService: RouterService,
    @Inject(ROOT_PREFIX) private rootPrefix: string,
    @Inject(MODULE_PREFIX) private modulePrefix: string
  ) {}

  ngOnInit(): void {
    this.control = new FormControl();
    this.options = OPTIONS;
  }

  // DOM EVENTS SECTIONS

  onOptionSelected(event: FormChangeEvent<SelectOption>) {}

  onActionSelected(path: string) {
    const url = `details/${path}`;
    this.routerService.navigate(url);
  }
}
