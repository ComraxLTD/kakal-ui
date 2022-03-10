import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import {NavbarBottomModule} from '../../projects/kakal-ui/src/lib/navbar-bottom/navbar-bottom.module';
import {NavbarBottomComponent} from '../../projects/kakal-ui/src/lib/navbar-bottom/navbar-bottom.component';

export default {
    title: 'Layout/Navbar Bottom',
    decorators: [
        moduleMetadata({
            imports: [NavbarBottomModule],
        }),
    ],
    component: NavbarBottomComponent,
    argTypes: {
        bottomIcon: {
            name: 'bottomIcon',
            description: '',
            table: {
                type: { summary: 'string' }
            },
            control: {
                type: 'string'
            }
        },
        nextText: {
            name: 'nextText',
            description: '',
            table: {
                type: { summary: 'string' }
            },
            control: {
                type: 'string'
            }
        },
        hasNext: {
            name: 'hasNext',
            description: '',
            table: {
                type: { summary: 'boolean' },
            },
            control: {
                type: 'boolean'
            }
        },
        disableNext$: {
            name: 'disableNext$',
            description: '',
            table: {
                type: { summary: 'Observable<boolean>' },
            },
            control: {
                type: 'Observable'
            }
        },
        hasSave: {
            name: 'hasSave',
            description: '',
            table: {
                type: { summary: 'boolean' },
            },
            control: {
                type: 'boolean'
            }
        },
        showSave$: {
            name: 'showSave$',
            description: '',
            table: {
                type: { summary: 'Observable<boolean>' },
            },
            control: {
                type: 'Observable'
            }
        },
        buttonSlots: {
            name: 'buttonSlots',
            description: '',
            table: {
                type: { summary: 'TemplateRef<any>' },
            },
            control: {
                type: 'TemplateRef'
            }
        },
        stepper: {
            name: 'stepper',
            description: '',
            table: {
                type: { summary: 'boolean' },
            },
            control: {
                type: 'boolean'
            }
        },
        previous: {
            name: '@Output() previous',
            description: '',
            table: {
                type: { summary: 'EventEmitter' },
            },
            control: {
                type: 'EventEmitter'
            }
        },
        next: {
            name: '@Output() next',
            description: '',
            table: {
                type: { summary: 'EventEmitter<CardStepModel>' },
            },
            control: {
                type: 'EventEmitter'
            }
        },
        save: {
            name: '@Output() save',
            description: '',
            table: {
                type: { summary: 'EventEmitter' },
            },
            control: {
                type: 'EventEmitter'
            }
        },
    },
} as Meta;

const Template: Story<NavbarBottomComponent> = (args: NavbarBottomComponent) => ({
    component: NavbarBottomComponent,
    props: args,
});

export const navbarBottom = Template.bind({});
navbarBottom.args = {
}

