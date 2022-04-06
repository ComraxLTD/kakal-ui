import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CardStepModel,
  Panel,
  PageHeadlineService,
  FormActions,
  FormGrid,
  FormService,
  Question,
  QuestionGroupModel,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
