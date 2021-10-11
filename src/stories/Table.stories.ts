import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { TableComponent } from 'src/app/components/table/table.component';
import {
  ColumnModel,
  ColumnType,
} from 'src/app/components/columns/column.model';
import { TableModel } from 'src/app/components/table/models/table.model';
import { AssetsModel } from 'src/app/utilities/models/assets.model';
import { NgxPaginationModule, PaginationInstance } from 'ngx-pagination';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { BehaviorSubject } from 'rxjs';
import { MaterialModule } from 'src/material/material.module';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import { ClassesDirective } from 'src/app/utilities/directives/classes.directive';
import { ColumnFilterComponent } from 'src/app/components/columns/column-filter/column-filter.component';
import { ColumnFormComponent } from 'src/app/components/columns/column-form/column-form.component';
import { FormatPipe } from 'src/app/utilities/pipes/format.pipe';
import { AreaPipe } from 'src/app/utilities/pipes/area.pipe';
import { TableService } from 'src/app/components/table/table.service';
import { ColumnsService } from 'src/app/components/columns/columns.service';
import { FormService } from 'src/app/components/form/services/form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusComponent } from 'src/app/components/status/status.component';
import { TableExComponent } from 'src/app/examples/table-ex/table-ex.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Table',
  component: TableExComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        TableComponent,
        StatusComponent,
        ColumnFilterComponent,
        ColumnFormComponent,
        PaginationComponent,
        TypographyComponent,
        ClassesDirective,
        FormatPipe,
        AreaPipe,
      ],
      providers: [
        FormService,
        TableService,
        ColumnsService,
        FormatPipe,
        AreaPipe,
        DatePipe,
        DecimalPipe,
      ],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FormsModule,
        CommonModule,
        NgxPaginationModule,
        MaterialModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<TableExComponent<any>> = (
  args: TableExComponent<any>
) => ({
  props: args,
});

const pagination: PaginationInstance = {
  itemsPerPage: 6,
  currentPage: 1,
  totalItems: 12,
};

const { data, columns, options } = {
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
      location: 'קריית שמונה',
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
      location: 'קריית שמונה',
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
      location: 'קריית שמונה',
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
      location: 'קריית שמונה',
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
      location: 'קריית שמונה',
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
      location: 'קריית שמונה',
    },
  ],
  columns: [
    new ColumnModel({ label: 'גוש', type: 'number' }),
    new ColumnModel({ label: 'חלקה', type: 'number' }),
    new ColumnModel({ label: 'תת חלקה', type: 'number' }),
    new ColumnModel({ label: 'שטח מ"ר', type: 'number' }),
    new ColumnModel({ label: 'שטח בבעלות הימנותא', type: 'number' }),
    new ColumnModel({ label: 'זכות במס', type: 'text' }),
    new ColumnModel({ label: 'סטטוס', type: 'custom', center: true }),
    new ColumnModel({ label: 'תיאור', type: 'text' }),
    new ColumnModel({ label: 'יישוב', type: 'text' }),
  ],
  options: {
    pagination: pagination,
    filters: ['id', '_constructor-name_'],
  },
};

const filterColumns = columns.map((column) => {
  column.filterable = true;
  column.filterOptions = [{ label: 'ex', value: 'ex' }];
  return column;
});

export const Default = Template.bind({});
Default.args = {
  data: data,
  columns: columns,
  model: new AssetsModel(),
  options: options,
};
export const Filter = Template.bind({});
Filter.args = {
  data: data,
  columns: [...filterColumns],
  model: new AssetsModel(),
  options: options,
};
