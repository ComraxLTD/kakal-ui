import { Component, OnInit } from '@angular/core';
import { PageHeadlineModel } from '../../page-headline/page-headline.model';
import { PageHeadlineService } from '../../page-headline/page-headline.service';
import { StatusBarsModel} from '../../status-bars/status-bars.model';

@Component({
  selector: 'kkl-page-headline-example',
  templateUrl: './page-headline-example.component.html',
  styleUrls: ['./page-headline-example.component.scss'],
})
export class PageHeadlineExampleComponent implements OnInit {
  headlineItems: PageHeadlineModel[] = [
    { label: 'אקליפטוס יער', type: 'default', size: 1.5, key: 'x' },
    { label: 'אקליפטוס יער', type: 'default', size: 1.5, key: 'x' },
    { label: new Date(), type: 'date', size: 1.5, key: 'x' },
    { label: 'אקליפטוס יער', type: 'custom', size: 1.5, key: 'thired' },
  ];
  status:StatusBarsModel=new StatusBarsModel({authorizedBars:3,totalBars:5,label:'ברים'} )

  constructor(private pageHeadlineService: PageHeadlineService) {}

  ngOnInit(): void {
    this.headlineItems = this.headlineItems.map((item, index) => ({
      ...item,
      size: index != 0 ? 1.8 : 2.9,
    }));
    this.pageHeadlineService.emitPageHeadlineItems(this.headlineItems)
  }
}
