import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Step } from '../../../kakal-ui/src/lib/vertical-steps/step/step.model';
import {
  FormDataSource,
  FormService,
  TableBase,
  CardInfoModel,
  CardStepModel,
  Panel,
  PageHeadlineService,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FormDataSource],
})
export class AppComponent implements OnInit {
  show$: Observable<boolean> = of(true);
  constructor(
    private formService: FormService,
    private pageHeadlineService: PageHeadlineService
  ) {}

  ngOnInit(): void {
    this.pageHeadlineService.emitPageHeadlineItems([
      { key: 'as', value: new Date(), format: 'date' },
      {
        key: 'as',
        value: {
          label: 'statusBars',
          authorizedBars: 3,
          totalBars: 6,
        },
        template: true,
      },
    ]);
  }
}
