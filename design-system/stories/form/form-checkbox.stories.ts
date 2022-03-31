import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FormCheckboxComponent, KKLFormCheckboxModule } from '../../projects/kakal-ui/src/public-api';

export default {
    title: 'Form/Checkbox',
    decorators: [
        moduleMetadata({
            imports: [KKLFormCheckboxModule],
        }),
    ],
    component: FormCheckboxComponent,
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
        validations: {
            name: 'validations',
            description: 'A validator is a function that processes a FormControl or collection of controls and returns an error map or null. A null map means that validation has passed.',
            table: {
                type: { summary: 'ValidatorFn[]' },
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
        labelPosition: {
            name: 'labelPosition',
            description: 'Whether the label should appear after or before the checkbox .',
            table: {
                type: {
                    summary: 'string', detail: "'before' | 'after'"},
            },
            control: {
                type: 'array'
            }
        },
    },
} as Meta;

const Template: Story<FormCheckboxComponent> = (args: FormCheckboxComponent) => ({
    component: FormCheckboxComponent,
    props: args,
});

export const Checkbox = Template.bind({});
Checkbox.args = {
}

