import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { PageHeadlineModel } from './page-headline.model';
import { PageHeadlineService } from './page-headline.service';

interface headlineItem {
  size?: number;
  label: string | number |Date;
  type: 'date' | 'default' | 'custom';
}
@Component({
  selector: 'kkl-page-headline',
  templateUrl: './page-headline.component.html',
  styleUrls: ['./page-headline.component.scss'],
})
export class PageHeadlineComponent implements OnInit {
  public headlineItems$!: Observable<PageHeadlineModel[]>;
  @Input() slots!: {[key: string]: TemplateRef<any>};
  //  slots: {}={};

  constructor(private pageHeadlineService:PageHeadlineService) {}

  ngOnInit(): void {
    this.headlineItems$=this.getHeadlineItems()
    console.log(this.slots);
    
    // this.headlineItems = [
    //   { label: 'אקליפטוס יער', type: 'default', size: 1.5,key:'x'},
    //   { label: 'אקליפטוס יער', type: 'default', size: 1.5,key:'x'},
    //   { label:new Date(), type: 'date', size: 1.5,key:'x'},
    //   { label: 'אקליפטוס יער', type: 'default', size: 1.5,key:'x'},
    // ];
    // this.headlineItems = this.headlineItems.map((item, index) => ({
    //   ...item,
    //   size: index != 0 ? 1.8 : 2.9,
    // }));
  }
  getHeadlineItems():Observable<PageHeadlineModel[]>{
    return this.pageHeadlineService.getPageHeadlineItemsAsObs()
  }


}
