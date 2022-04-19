import { Component, OnInit } from '@angular/core';
import { CommitteeLayoutService } from '../../../committee-layout/committee-layout.service';
import { Observable } from 'rxjs';
import { Step } from '../../../../../../../kakal-ui/src/lib/vertical-steps/step/step.model';
import { Panel } from '../../../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-portfolio-layout',
  templateUrl: './portfolio-layout.component.html',
  styleUrls: ['./portfolio-layout.component.scss'],
})
export class PortfolioLayoutComponent implements OnInit {
  // use to switch between accordion and steps ui
  complete$!: Observable<boolean>;

  // use selectIndex to navigate to desired step index
  selectedIndex$!: Observable<number>;

  // whet set to false present steps ui, when set to true present accordion ui
  title: string = 'תיקי רמ"י חדש';

  // array for vertical steps layout
  public steps: Step[] = [
    { key: 'details', label: 'פרטי תיק' },
    {
      key: 'evaluation',
      label: 'הערכות כספיות',
    },
    { key: 'estates', label: 'פירוט נכסים' },
    {
      key: 'documents',
      label: 'מסמכים משוייכים לתיק',
    },
  ];

  // array for accordion panels layout
  public panels: Panel[] = [
    { key: 'details', label: 'פרטי תיק' },
    {
      key: 'evaluation',
      label: 'הערכות כספיות',
    },
    { key: 'estates', label: 'פירוט מכסים' },
    {
      key: 'documents',
      label: 'מסמכים משוייכים לתיק',
    },
  ];

  buttonLabel: string = 'הוסף תיק חדש';

  constructor(private committeeLayoutService: CommitteeLayoutService) {}

  ngOnInit(): void {
    this.selectedIndex$ = this.committeeLayoutService.listenSelectIndex();
    this.committeeLayoutService.setInnerStepsLength(this.steps.length);
  }
}
