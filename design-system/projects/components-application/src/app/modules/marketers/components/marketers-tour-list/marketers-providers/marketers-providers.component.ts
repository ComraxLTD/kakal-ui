import { Component, OnInit } from '@angular/core';
import { TableBase } from '@ComraxLTD/kakal-ui/lib/kkl-table/table.model';

@Component({
  selector: 'app-marketers-providers',
  templateUrl: './marketers-providers.component.html',
  styleUrls: ['./marketers-providers.component.scss'],
})
export class MarketersProvidersComponent implements OnInit {
  dataSource: any[] = [
    {
      instructors: {
        headline: { label: 'מדריכים', svgIcon: '' },
        content: [
          { label: 'מדריכים', svgIcon: 'search' },
          { label: 'מדריכים', svgIcon: 'search' },
        ],
      },
      instructorsProviders: {
        headline: { label: 'ספקי מדריעים', svgIcon: '' },
        content: [
          { label: 'ספקי מדריעים', svgIcon: 'search' },
          { label: 'ספקי מדריעים', svgIcon: 'search' },
        ],
      },
      drivers: {
        headline: { label: 'נהגים', svgIcon: '' },
        content: [
          { label: 'נהגים', svgIcon: 'search' },
          { label: 'נהגים', svgIcon: 'search' },
        ],
      },

      driverProviders: {
        headline: { label: 'ספקי נהגים', svgIcon: '' },
        content: [
          { label: 'ספקי נהגים', svgIcon: 'search' },
          { label: 'ספקי נהגים', svgIcon: 'search' },
        ],
      },
    },
  ];
  columns: TableBase[] = [
    { key: 'instructors', label: 'מדריכים', templateName: 'instructors' },
    {
      key: 'instructorsProviders',
      label: 'ספקי מדריכים',
      templateName: 'instructorsProviders',
    },
    { key: 'drivers', label: 'נהגים', templateName: 'drivers' },
    {
      key: 'driverProviders',
      label: 'ספק הסעים',
      templateName: 'driverProviders',
    },
  ];

  ngOnInit(): void {}
  constructor() {}
  lol(data: any) {
    console.log(data);
  }
}
