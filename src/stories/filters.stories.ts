import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material/material.module';
import { FilterModel } from 'src/app/components/cards/card-filter/card-filter.model';
import { CardFilterComponent } from 'src/app/components/cards/card-filter/card-filter.component';

import { FiltersComponent } from 'src/app/exemples/filters/filters.component';
import { SizeDirective } from 'src/app/utilities/directives/size.directive';
import { StepComponent } from 'src/app/components/step/step.component';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { ClassesDirective } from 'src/app/utilities/directives/classes.directive';
import { VariantDirective } from 'src/app/utilities/directives/variant.directive';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonDirective } from 'src/app/utilities/directives/button.directive';
import { ColorDirective } from 'src/app/utilities/directives/color.directive';


export default {
  title: 'filters',
  decorators: [
    moduleMetadata({
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      declarations: [
        FiltersComponent,
        ColorDirective,
        SizeDirective,
        StepComponent,
        IconComponent,
        VariantDirective,
        ClassesDirective,
        ButtonDirective,
        TypographyComponent,
        CardFilterComponent
      ],
      imports: [CommonModule, MaterialModule, FlexLayoutModule],
    }),
  ],
} as Meta;

const Template: Story<FiltersComponent> = (args: FiltersComponent) => ({
  props: args,
  template: `<app-filters ${Object.keys(args).reduce(
    (acc, key) =>`${acc} [${key}]='${typeof args[key] === 'object' ? JSON.stringify(args[key]) : args[key]}'`,'')} ></app-filters>`,
});

export const Filters = Template.bind({});

Filters.args = {
  filters: [
    new FilterModel({
       label: 'test',
        value: 15,
        svgUrl: "assets",
    }),
    new FilterModel({
        label: 'test',
        value: 15,
        svgUrl: "assets",
    }),
    new FilterModel({
        label: 'test',
        value: 15,
        svgUrl: "assets",
    }),
    new FilterModel({
        label: 'test',
        value: 15,
        svgUrl: "assets",
    }),
    new FilterModel({
        label: 'test',
        value: 15,
        svgUrl: "assets",
    }),
  ],

};

