// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import { KKLCardAddModule } from '../../projects/kakal-ui/src/lib/cards/card-add/card-add.module';
import { CardAddComponent } from '../../projects/kakal-ui/src/lib/cards/card-add/card-add.component';

export default {
    title: 'Tools',
    decorators: [
        moduleMetadata({
            imports: [KKLCardAddModule],
        }),
    ],
    component: CardAddComponent,
    argTypes: {
        title: {
            name: 'Title',
            description: 'Title of card',
            control: {
                type: 'text'
            }
        },
        content: {
            name: 'Content',
            description: 'Content of card',
            control: {
                type: 'text'
            }
        },
        icon: {
            name: 'Icon',
            description: 'Icon to display',
            control: {
                type: 'text'
            }
        },
    },
} as Meta;

const Template: Story<CardAddComponent> = (args: CardAddComponent) => ({
    component: CardAddComponent,
    props: args,
});

export const AddCard = Template.bind({});

