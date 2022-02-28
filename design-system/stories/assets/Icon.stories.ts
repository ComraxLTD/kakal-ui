// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata, } from '@storybook/angular';
import { KKLIconModule, IconComponent } from '../../projects/kakal-ui/src/public-api';

export default {
    title: 'Assets',
    decorators: [componentWrapperDecorator((story) => `<div class="mat-body">${story}</div>`), moduleMetadata({
        imports: [KKLIconModule],
        declarations: []
    })],
    component: IconComponent,
} as Meta;

const Template: Story<IconComponent> =
    (args: IconComponent) => ({
        component: IconComponent,
        props: args,
    });

export const icon = Template.bind({});
icon.args = {
    key: 'medal',
    size: 7,
    color: 'success',
    stroke: 'text',
    backgroundColor: 'text',
    disabled: false,
    type:'svg',
    formType:'form'
}
