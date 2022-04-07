// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { KKLCardFilterModule } from '../../projects/kakal-ui/src/lib/cards/card-filter/card-filter.module';
import { CardFilterComponent} from '../../projects/kakal-ui/src/lib/cards/card-filter/card-filter.component';

export default {
  title: 'Tools',
  decorators: [
    moduleMetadata({
      imports: [KKLCardFilterModule],
    }),
  ],
  component: CardFilterComponent,
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

const Template: Story<CardFilterComponent> = (args: CardFilterComponent) => ({
  component: CardFilterComponent,
  props: args,
});

export const filterCard = Template.bind({});

filterCard.args = {
  card:{
    label: 'שם הכרטיס',
    value: 2,
    svgIcon: 'search',
  }
};
