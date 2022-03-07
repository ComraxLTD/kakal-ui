// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormRadioComponent } from '../../projects/kakal-ui/src/lib/form/form-radio/form-radio.component';
import { MatRadioModule } from '@angular/material/radio';
import { moduleMetadata, } from '@storybook/angular';
export default {
    title: 'Form',
    decorators: [
        moduleMetadata({
            imports: [MatRadioModule, FormsModule, ReactiveFormsModule]
        })
    ],
    component: FormRadioComponent,
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
        label: {
            name: 'label',
            description: 'Label of input',
            table: {
            },
            control: {
                type: 'text'
            }
        },
        change: {
            name: '@Output change',
            description: 'emit event of change .',
            table: {
                type: {
                    summary: 'EventEmitter'
                }
            },
            control: {
                type: 'text'
            }
        },
    }
    // we need to override here since in Angular it could be null as well and therefore it would become an ambigious data type for storybook
} as Meta;

const Template: Story<FormRadioComponent> = (args: FormRadioComponent) => ({
    component: FormRadioComponent,
    props: args,
});

export const RadioButton = Template.bind({});
RadioButton.args = {
    control: new FormControl(),
    key: 'gender',
    options: [
        { label: 'female', value: 'female', checked: false },
        { label: 'male', value: 'male', checked: true }],
    label: 'choose your gender',
}

