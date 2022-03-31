// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { PageHeadlineExampleComponent } from '../../projects/kakal-ui/src/lib/examples/page-headline-example/page-headline-example.component';
import { KKLPageHeadlineExampleModule } from '../../projects/kakal-ui/src/lib/examples/page-headline-example/page-headline-example.module';
import { PageHeadlineComponent } from '../../projects/kakal-ui/src/lib/page-headline/page-headline.component';

export default {
  title: 'Tools',
  decorators: [
    moduleMetadata({
      imports: [KKLPageHeadlineExampleModule],
    }),
  ],
  component: PageHeadlineComponent,
  argTypes: {

    slots: {
      name: 'slots',
      description:
        'An object containes all the template of the custom headline parts',
      table: {
        type: {
          summary: 'key:ElementRef',
        },
      },
    },
  },
} as Meta;

const Template: Story<PageHeadlineExampleComponent> = (
  args: PageHeadlineExampleComponent
) => ({
  component: PageHeadlineExampleComponent,
  props: args,
});

export const pageHeadline = Template.bind({});

