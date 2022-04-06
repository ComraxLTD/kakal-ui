import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StatusBarsModel } from '../../../kakal-ui/src/lib/status-bars/status-bars.model';
import {
  CardStepModel,
  Panel,
  PageHeadlineService,
  FormActions,
  FormGrid,
  FormService,
  Question,
  QuestionGroupModel,
  MenuCard,
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

  cards: MenuCard[] = [
    { label: 'string', svgIcon: 'home', active: true, path: 'no' },
  ];
  status: StatusBarsModel = {
    label: 'statusBars',
    authorizedBars: 3,
    totalBars: 8,
  };
  ngOnInit(): void {
    this.pageHeadlineService.emitPageHeadlineItems([
      { value: 'כותרת' },
      { value: 'כותרת' },
      { value: 'כותרת' },
      { value: new Date(), format: 'date' },
      {
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
