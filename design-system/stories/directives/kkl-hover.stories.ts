import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { KKLHoverComponent } from '../../projects/kakal-ui/src/lib/kkl-hover/kkl-hover.component';
import {KKLHoverModule} from '../../projects/kakal-ui/src/lib/kkl-hover/kkl-hover.module';
export default {
    title: 'Directives/Hover',
    decorators: [
        moduleMetadata({
            imports: [KKLHoverModule],
        }),
    ],
    component: KKLHoverComponent,
    argTypes: {
        text: {
            name: 'text',
            description: 'Text to display .',
            table: {
                type: { summary: 'string' },
            },
            control: {
                type: 'string'
            }
        },
        Template: {
            name: 'Template',
            description: 'Custom hover template .',
            table: {
                type: { summary: 'TemplateRef' },
            },
            control: {
                type: 'TemplateRef'
            }
        },
        hoverColor: {
            name: 'hoverColor',
            description: 'Chose background color',
            table: {
                type: { summary: 'string',detail:"'black' | 'white'" },
                defaultValue: { summary: "black" },
            },
            control: {
                type: 'string'
            }
        },
    },
} as Meta;

const Template: Story<KKLHoverComponent> = (args: KKLHoverComponent) => ({
    component: KKLHoverComponent,
    props: args,
});

export const hover = Template.bind({});
hover.args = {
}

