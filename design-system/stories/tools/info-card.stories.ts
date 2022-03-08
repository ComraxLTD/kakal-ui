// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { KKLInfoCardModule } from '../../projects/kakal-ui/src/lib/cards/info-card/info-card.module';
import { InfoCardComponent } from '../../projects/kakal-ui/src/lib/cards/info-card/info-card.component';
import { InfoCardModel } from '../../projects/kakal-ui/src/lib/cards/info-card/info-card.model';

export default {
  title: 'Tools',
  decorators: [
    moduleMetadata({
      imports: [KKLInfoCardModule],
    }),
  ],
  component: InfoCardComponent,
  argTypes: {
    card: {
      name: 'card',
      description: 'An object containes all the card info',
      table: {
        type: {
          summary: 'icon :string, headling:string, subHeadline:string',
        },
      },
    },
  },
} as Meta;

const Template: Story<InfoCardComponent> = (args: InfoCardComponent) => ({
  component: InfoCardComponent,
  props: args,
});

export const infoCard = Template.bind({});

infoCard.args = {
  status: new InfoCardModel({
    icon: 'search',
    headline: 'כותרת ראשית',
    subHeadline: 'כותרת משנית שנחתכת לאחר 18 תווים',
  }),
};
