import { moduleMetadata } from '@storybook/angular';
import {KklTitleModule} from '../../projects/kakal-ui/src/lib/kkl-title/kkl-title.module'
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TitleComponent } from '../../projects/kakal-ui/src/lib/kkl-title/kkl-title.component';

export default {
  title: 'Assets',
  decorators: [
    moduleMetadata({
      imports: [KklTitleModule],
    }),
  ],
  component: TitleComponent,
  argTypes: {
    text: {
        name: 'text',
        type: { name: 'string', required: false },//without it the headline will be only underline
        defaultValue: '',
        description: 'the text that the title component will show',
        table: {
          type: { summary: 'string' },
        },
        control: {
          type: 'text',
        },
      },
      alignment: {
        name: 'alignment',
        type: { name: 'string', required: false },//without it the headline will be only underline
        defaultValue: 'space-between',
        description: 'one of the  flex(css) justify-content options',
        table: {
          type: { summary: 'string' },
        },
        control: {
          type: 'text',
        },
      },
      gap: {
        name: 'gap',
        type: { name: 'number', required: false },
        defaultValue: '',
        description: 'number for flex(css)gap',
        table: {
          type: { summary: 'number' },
        },
        control: {
          type: 'number',
        },
      },   
      size: {
        name: 'size',
        type: { name: 'number', required: false },
        defaultValue: '',
        description: 'size of the headline',
        table: {
          type: { summary: 'number' },
        },
        control: {
          type: 'number',
        },
      },

  },
} as Meta;

const Template: Story<TitleComponent> = (args: TitleComponent) => ({
  component: TitleComponent,
  props: args,
});

export const title = Template.bind({});
title.args = {
    text:'new headline'
   
}

