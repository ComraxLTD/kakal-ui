import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TableComponent } from 'src/app/components/table/table.component';
import { ColumnModel, ColumnType } from 'src/app/components/table/models/column.model';
import { TableModel } from 'src/app/components/table/models/table.model';
import { AssetsModel } from 'src/app/utilities/models/assets.model';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { MatTable } from '@angular/material/table';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { BehaviorSubject } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/material/material.module';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import { ClassesDirective } from 'src/app/utilities/directives/classes.directive';


export default {
  title: 'Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      declarations: [TableComponent, PaginationComponent,TypographyComponent,ClassesDirective],
      providers: [],
      imports: [
        CommonModule,
        NgxPaginationModule,
        MaterialModule
      ],
    }),
  ],
} as Meta;

const Template: Story<TableComponent<any>> = (args: TableComponent<any>) => ({
  props: args
});


const { data, type, columns, } = {
  type: new AssetsModel(),
  data: [
      {
        id: 20,
        block: 20,
        division: 10,
        subdivision: 0,
        area: 2692,
        areaOwn: 748,
        property: '',
        status: {
          label: 'ממתין לטיפול עורך דין',
          value: 4,
        },
        description: '',
        location: 'קריית שמונה'
      },
      {
        id: 20,
        block: 20,
        division: 20,
        subdivision: 0,
        area: 2692,
        areaOwn: null,
        property: '',
        status: {
          label: 'שוריין ע"י פיננסים',
          value: 5,
        },
        description: '',
        location: 'קריית שמונה'
      },
      {
        id: 24,
        block: 24,
        division: 20,
        subdivision: 0,
        area: 2692,
        areaOwn: null,
        property: '',
        status: {
          label: 'ממתין לרו"ח',
          value: 3,
        },
        description: '',
        location: 'קריית שמונה'
      },
      {
        id: 20,
        block: 20,
        division: 54,
        subdivision: 0,
        area: 1037,
        areaOwn: null,
        property: '',
        status: {
          label: 'התקבלה עסקה חדשה',
          value: 1,
        },
        description: '',
        location: 'קריית שמונה'
      },
      {
        id: 20,
        block: 20,
        division: 20,
        subdivision: 0,
        area: 680,
        areaOwn: null,
        property: '',
        status: {
          label: 'ממתין לפיננסים',
          value: 1,
        },
        description: '',
        location: 'קריית שמונה'
      },
      {
        id: 20,
        block: 20,
        division: 20,
        subdivision: 0,
        area: 2692,
        areaOwn: 748,
        property: '',
        status: {
          label: 'ממתין לטיפול עורך דין',
          value: 4,
        },
        description: '',
        location: 'קריית שמונה'
      },
  ],
  columns: [
    new ColumnModel({ label: 'גוש', type: ColumnType.NUMBER }),
    new ColumnModel({ label: 'חלקה', type: ColumnType.NUMBER }),
    new ColumnModel({ label: 'תת חלקה', type: ColumnType.NUMBER }),
    new ColumnModel({ label: 'שטח מ"ר', type: ColumnType.NUMBER }),
    new ColumnModel({ label: 'שטח בבעלות הימנותא', type: ColumnType.NUMBER }),
    new ColumnModel({ label: 'זכות במס', type: ColumnType.TEXT }),
    new ColumnModel({ label: 'סטטוס', type: ColumnType.CUSTOM, center: true }),
    new ColumnModel({ label: 'תיאור', type: ColumnType.TEXT }),
    new ColumnModel({ label: 'יישוב', type: ColumnType.TEXT }),
  ]
};
const table = new TableModel({ data, type, columns });
table.setTable();
const $table = new BehaviorSubject<TableModel<any>>(table);

 const status = `
 <ng-template #status let-cell="cell">
 <div class="status">
   <app-status [status]="cell.item?.status"></app-status>
 </div>
</ng-template>
 `

export const Default = Template.bind({});
Default.args = {
  $table: $table, rowSlots: {status}
};
