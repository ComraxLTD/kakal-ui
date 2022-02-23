// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata, } from '@storybook/angular';

import { FormExComponent } from '../../projects/kakal-ui/src/lib/examples/form-ex/form-ex.component';
import { KKLFormModule } from '../../projects/kakal-ui/src/lib/form/form/form.module';

export default {
    title: 'form',
    decorators: [componentWrapperDecorator((story) => `<div class="mat-body">${story}</div>`), moduleMetadata({
        imports: [KKLFormModule],
        declarations: []
    })],
    component: FormExComponent,
} as Meta;

const Template: Story<FormExComponent> =
    (args: FormExComponent) => ({
        component: FormExComponent,
        props: args,
    });

export const form = Template.bind({});

const questions = [
    {
        key: 'text-input',
        controlType: 'text',
        label: 'Enter text'
    }
];

form.args = {
    group: {
        questions,
        key: 'testForm',
        options: {
            gridProps: { cols: 6, rows: 2 },
        }
    }
    //  group:
}
