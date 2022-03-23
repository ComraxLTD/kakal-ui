// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { KKLBreadCrumbsModule } from '../../projects/kakal-ui/src/lib/bread-crumbes/bread-crumbs.module';
import { BreadCrumbesComponent } from '../../projects/kakal-ui/src/lib/bread-crumbes/bread-crumbes.component';
import { BreadCrumbsModel } from '../../projects/kakal-ui/src/lib/bread-crumbes/bread-crumbes.model';
import { of } from 'rxjs';

export default {
  title: 'Tools',
  decorators: [
    moduleMetadata({
      imports: [KKLBreadCrumbsModule],
    }),
  ],
  component: BreadCrumbesComponent,
  argTypes: {
    breadCrumbes$: {
      name: ' breadCrumbes$',
      description: 'every step of the url path is a "bread-crumb',
      table: {
        type: {
          summary: 'breadCrumbsModel',
        },
      },
    },
  },
} as Meta;

const Template: Story<BreadCrumbesComponent> = (args: BreadCrumbesComponent) => ({
  component: BreadCrumbesComponent,
  props: args,
});

export const breadCrumbs = Template.bind({});

breadCrumbs.args = {
    breadCrumbes$: of([
    new BreadCrumbsModel({route:'asd',value:'התקשרויות'}),
    new BreadCrumbsModel({route:'asd',value:'דרגה שניה'}),
    new BreadCrumbsModel({route:'asd',value:'דרגה שלישית'}),
  ]),

};
