// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { FormAutocompleteComponent } from '../../projects/kakal-ui/src/public-api';


export default {
  title: 'Form',
  decorators: [
    moduleMetadata({
      imports: [FormAutocompleteComponent],
    }),
  ],
  component: FormAutocompleteComponent,
  argTypes: {
    key: {
      name: 'key',
      type: { name: 'string', required: false },
      defaultValue: '',
      description: 'Specify a unique name',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    label: {
      name: 'label',
      type: { name: 'string', required: false },
      defaultValue: '',
      description: 'Specify the label',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    icon: {
      name: 'icon',
      type: { name: 'string', required: false },
      defaultValue: 'search',
      description: 'Specify the icon. an angular material icon or svg ',

      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'search' },
      },
      control: {
        type: 'text',
      },
    },

    options: {
      name: 'options',
      description: 'Array of options to render',
      table: {
        type: {
          summary: '@Input() options : SelectOption[]',
          name: 'array',
          required: true,
        },
      },
    },
    panelWidth: {
      name: 'panelWidth',
      type: { name: 'boolean', required: false, summary: 'boolean' },
      defaultValue: false,
      description: 'Specify the width of the autocomplete panel. ',
    },
    multi: {
      name: 'multi',
      type: { name: 'boolean', required: false, summary: 'boolean' },
      defaultValue: false,
      description: 'Specify if the autocomplete is a multi choice.',
    },
    control: {
      name: 'control',
      description: 'An Angular FormControl instance ',
      table: {
        type: {
          required: true,
          summary: 'FormControl',
        },
      },
    },
    optionsSlot: {
      name: 'optionSlot',
      description:
        'An angular template element. use to render custom option template',
      table: {
        type: {
          summary: 'ElementRef',
        },
      },
    },
    autocomplete: {
      name: 'queryChange',
      description: 'Event that is emitted whenever the user is typing. ',
      table: {
        type: {
          summary: 'EventEmitter<FormChangeEvent>',
        },
      },
    },
    optionsSelected: {
      name: 'optionsSelected',
      description:
        'Event that is emitted whenever an option from the list is selected. ',
      table: {
        type: {
          summary: 'EventEmitter<FormChangeEvent>',
        },
      },
    },
    multiOptionsSelected: {
      name: 'multiOptionsSelected',
      description:
        'Event that is emitted whenever an option from the list is selected. ',
      table: {
        type: {
          summary: 'EventEmitter<FormChangeEvent>',
        },
      },
    },
  },
} as Meta;

const Template: Story<FormAutocompleteComponent> = (
  args: FormAutocompleteComponent
) => ({
  component: FormAutocompleteComponent,
  props: args,
});

export const Autocomplete = Template.bind({});
Autocomplete.args = {
  key: 'autocomplete',
  options: [
    { value: '1', label: 'first' },
    { value: '2', label: 'second' },
    { value: '3', label: 'thierd' },
    { value: '4', label: 'foruth' },
  ],
};

export const autocompleteMulti = Template.bind({});
autocompleteMulti.args = {
  icon: 'search',
  key: 'autocomplete',
  multi: true,
  options: [
    { value: '1', label: 'first' },
    { value: '2', label: 'second' },
    { value: '3', label: 'thierd' },
    { value: '4', label: 'foruth' },
  ],
};