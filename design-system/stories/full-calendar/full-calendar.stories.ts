import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import {KKLTabsModule} from '../../projects/kakal-ui/src/lib/tabs/tabs.module';
import {TabsComponent} from '../../projects/kakal-ui/src/lib/tabs/tabs.component';

export default {
    title: 'Full calendar',
    decorators: [
        moduleMetadata({
            imports: [KKLTabsModule],
        }),
    ],
    component: TabsComponent,
    argTypes: {
        data: {
            name: 'Data',
            description: 'Data of tabs',
            table: {
                type: { summary: 'array',detail :"{key:string,label:string}[]" },
            },
            control: {
                type: 'array'
            }
        },
        templates: {
            name: 'Templates',
            description: 'Ng-template of your content',
            table: {
                type: { summary: 'TemplateRef<any>',detail:"{ [key: string]: TemplateRef<any> }" },
            },
            control: {
                type: 'object'
            }
        },
    },
} as Meta;

const Template: Story<TabsComponent> = (args: TabsComponent) => ({
    component: TabsComponent,
    props: args,
});

// export const Tabs = Template.bind({});
// Tabs.args = {
// }

