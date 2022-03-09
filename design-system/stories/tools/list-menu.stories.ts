import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { KKLListMenuModule } from '../../projects/kakal-ui/src/lib/list-menu/list-menu.module';
import { KKLListMenuComponent } from '../../projects/kakal-ui/src/lib/list-menu/list-menu.component';

export default {
    title: 'Tools',
    decorators: [
        moduleMetadata({
            imports: [KKLListMenuModule],
        }),
    ],
    component: KKLListMenuComponent,
    argTypes: {
        options: {
            name: 'options',
            description: 'Array of items .',
            table: {
                type: { summary: 'array' },
                defaultValue: { summary: '[1,2,3,4]' },
            },
            control: {
                type: 'array'
            }
        },
        optionTemplate: {
            name: 'optionTemplate',
            description: 'Custom option template',
            table: {
                type: { summary: 'TemplateRef' },
            },
            control: {
                type: 'TemplateRef'
            }
        },
        emitOption: {
            name: '@Output() emitOption',
            description: 'Emit the selected option .',
            table: {
                type: { summary: 'EventEmitter' },
            },
            control: {
                type: 'EventEmitter'
            }
        },
    },
} as Meta;

const Template: Story<KKLListMenuComponent> = (args: KKLListMenuComponent) => ({
    component: KKLListMenuComponent,
    props: args,
});

export const listMenu = Template.bind({});
listMenu.args = {
}

