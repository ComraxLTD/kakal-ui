import { moduleMetadata } from '@storybook/angular';
import { FormControl } from '@angular/forms';

import { Story, Meta } from '@storybook/angular/types-6-0';
import { KKLFormSelectModule } from '../../projects/kakal-ui/src/lib/form/form-select/form-select.module';
import { FormSelectComponent } from '../../projects/kakal-ui/src/lib/form/form-select/form-select.component';

export default {
    title: 'Form/Select',
    decorators: [
        moduleMetadata({
            imports: [KKLFormSelectModule],
        }),
    ],
    component: FormSelectComponent,
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
        options: {
            name: 'options',
            description: 'options to display .',
            table: {
                type: {
                    summary: 'SelectOption[]', detail: `
                label: string;
                value: any;
                selected?: boolean;
                disabled?: boolean;
                `},
                defaultValue: { summary: "[{label:'test',value:0}]" },
            },
            control: {
                type: 'array'
            }
        },
        multi: {
            name: 'multi',
            description: 'chose if use multi select .',
            table: {
                type: { summary: 'boolean' },
            },
            control: {
                type: 'boolean'
            }
        },
        theme: {
            name: 'theme',
            description: 'mat-form-field - color input .',
            table: {
                type: { summary: 'Palette' ,detail : `
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
        placeholder: {
            name: 'placeholder',
            description: 'placeholder of input .',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'pick date' },
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
        selectedEvent: {
            name: '@Output selected',
            description: 'emit value of selected .',
            table: {
                type: { summary: 'EventEmitter' },
            },
            control: {
                type: 'object'
            }
        },
        focusEvent: {
            name: '@Output focus',
            description: 'emit event of focus .',
            table: {
                type: { summary: 'EventEmitter' },
            },
            control: {
                type: 'object'
            }
        },
    },
} as Meta;

const Template: Story<FormSelectComponent> = (args: FormSelectComponent) => ({
    component: FormSelectComponent,
    props: args,
});

export const select = Template.bind({});
select.args = {
}

