// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { KKLFilterCardModule } from '../../projects/kakal-ui/src/lib/cards/filter-card/filter-card.module';
import {FilterCardComponent } from '../../projects/kakal-ui/src/lib/cards/filter-card/filter-card.component';
import { FilterCardModel} from '../../projects/kakal-ui/src/lib/cards/filter-card/filter-card.model';

export default {
  title: 'Tools',
  decorators: [
    moduleMetadata({
      imports: [KKLFilterCardModule],
    }),
  ],
  component: FilterCardComponent,
  argTypes: {
    card: {
      name: 'card',
      description: 'An object containes all the card info',
      table: {
        type: {
          summary: 'filterCardMoel',
        },
      },
    },
  },
} as Meta;

const Template: Story<FilterCardComponent> = (args: FilterCardComponent) => ({
  component: FilterCardComponent,
  props: args,
});

export const filterCard = Template.bind({});

filterCard.args = {
  card:new FilterCardModel({
    name: 'שם הכרטיס',
    count: 2, 
    svg: 'search',
  })
};
 