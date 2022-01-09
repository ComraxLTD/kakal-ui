import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FilterModel } from '../app/components/cards/card-filter/card-filter.model';
import { CardFilterComponent } from '../app/components/cards/card-filter/card-filter.component';

import { SizeDirective } from '../app/utilities/directives/size.directive';
import { IconComponent } from '../app/components/icon/icon.component';
import { VariantDirective } from '../app/utilities/directives/variant.directive';
import { TypographyComponent } from '../app/components/typography/typography.component';
import { ButtonDirective } from '../app/utilities/directives/button.directive';
import { ColorDirective } from '../app/utilities/directives/color.directive';
import { FiltersExComponent } from '../app/examples/filters-ex/filters-ex.component';


export default {
  title: 'Filters',
  decorators: [
    moduleMetadata({
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      declarations: [
        FiltersExComponent,
        ColorDirective,
        SizeDirective,
        IconComponent,
        VariantDirective,
        ButtonDirective,
        TypographyComponent,
        CardFilterComponent,
      ],
      imports: [CommonModule, MaterialModule],
    }),
  ],
} as Meta;

const Template: Story<FiltersExComponent> = (args: FiltersExComponent) => ({
  props: args,
  template: `<app-filters ${Object.keys(args).reduce(
    (acc, key) =>
      `${acc} [${key}]='${
        typeof args[key] === 'object' ? JSON.stringify(args[key]) : args[key]
      }'`,
    ''
  )} ></app-filters>`,
});

export const Filters = Template.bind({});

Filters.args = {
  filters: [
    new FilterModel({
      label: 'test',
      value: 15,
      svgUrl: 'assets',
    }),
    new FilterModel({
      label: 'test',
      value: 15,
      svgUrl: 'assets',
    }),
    new FilterModel({
      label: 'test',
      value: 15,
      svgUrl: 'assets',
    }),
    new FilterModel({
      label: 'test',
      value: 15,
      svgUrl: 'assets',
    }),
    new FilterModel({
      label: 'test',
      value: 15,
      svgUrl: 'assets',
    }),
  ],
};
