import { moduleMetadata } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { Story, Meta } from '@storybook/angular/types-6-0';
import { KKLFormInputModule } from '../../projects/kakal-ui/src/lib/form/form-input/form-input.module';
import { FormInputComponent } from '../../projects/kakal-ui/src/lib/form/form-input/form-input.component';
import { QuestionTextModel } from '../../projects/kakal-ui/src/lib/form/models/question-text.model';
import { QuestionNumberModel } from '../../projects/kakal-ui/src/lib/form/models/question-number.model';
import { QuestionSumModel } from '../../projects/kakal-ui/src/lib/form/models/question-sum.model';
import { QuestionTextareaModel } from '../../projects/kakal-ui/src/lib/form/models/question-textarea.model';

export default {
  title: 'Form/Input',
  decorators: [
    moduleMetadata({
      imports: [KKLFormInputModule],
    }),
  ],
  component: FormInputComponent,
  argTypes: {
    control: {
      name: 'control',
      description: 'Angular FormControl .',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: 'new FormControl()' },
      },
      control: {
        type: 'object'
      }
    },
    key: {
      name: 'key',
      description: 'Name of input .',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'myDate' },
      },
      control: {
        type: 'text'
      }
    },
    placeholder: {
      name: 'placeholder',
      description: 'Placeholder of input .',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'pick date' },
      },
      control: {
        type: 'text'
      }
    },
    label: {
      name: 'label',
      description: 'Label of input',
      table: {
      },
      control: {
        type: 'text'
      }
    },
    appearance: {
      name: 'appearance',
      description: 'The mat-form-field supports 4 different appearance variants',
      table: {
        type: { summary: 'string', detail: "'legacy' | 'standard' | 'fill' | 'outline'" },
        defaultValue: { summary: 'none' },
      },
      control: {
        type: 'text'
      }
    },
    theme: {
      name: 'theme',
      description: 'mat-form-field - color input .',
      table: {
        type: {
          summary: 'Palette', detail: `
          | 'paper'
| 'default'
| 'disable'
| 'disableButton'
| 'disableText'
| 'table'
| 'text'
| 'success'
| 'graylight'` },
      },
      control: {
        type: 'text'
      }
    },
    cleave: {
      name: 'cleave',
      description: 'https://nosir.github.io/cleave.js/',
      table: {
      },
      control: {
        type: 'object'
      }
    },
    icon: {
      name: 'icon',
      description: 'Chose icon for input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'email' },
      },
      control: {
        type: 'text'
      }
    },
    controlType: {
      name: 'controlType',
      description: 'type of input',
      table: {
        type: {
          summary: 'ControlType', detail: `
          | 'text'
          | 'password'
          | 'number'
          | 'textarea'
          | 'select'
          | 'calendar'
          | 'checkbox'
          | 'radio'
          | 'date'
          | 'time'
          | 'group'
          | 'custom'
          | 'sum'
          | 'file'
          | 'currency'
          | 'autocomplete'
          | 'toggle'
          | 'email'
          | 'phone'
          | 'textEditor'
          | 'cleave'
` },
      },
      control: {
        type: 'text'
      }
    },
  },
} as Meta;

const Template: Story<FormInputComponent> = (args: FormInputComponent) => ({
  component: FormInputComponent,
  props: args,
});

export const Text = Template.bind({});
Text.args = {
  controlType:'text',
  control: new FormControl()
}

export const Number = Template.bind({});
Number.args = {
 controlType:'number',
 control: new FormControl()
}

export const TextArea = Template.bind({});
TextArea.args = {
  controlType:'textarea',
  control: new FormControl()
}

export const Email = Template.bind({});
Email.args = {
  controlType:'email',
  control: new FormControl()
}

export const Phone = Template.bind({});
Phone.args = {
  controlType:'phone',
  control: new FormControl()
}

export const Time = Template.bind({});
Time.args = {
  controlType:'time',
  control: new FormControl()
}
