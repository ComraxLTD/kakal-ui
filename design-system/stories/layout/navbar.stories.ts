import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { NavbarComponent } from '../../projects/kakal-ui/src/lib/navbar/navbar.component';
import { KKLNavbarModule } from '../../projects/kakal-ui/src/lib/navbar/navbar.module';

export default {
    title: 'Layout/Navbar',
    decorators: [
        moduleMetadata({
            imports: [KKLNavbarModule],
        }),
    ],
    component: NavbarComponent,
    argTypes: {
        openIcon: {
            name: 'openIcon',
            description: '',
            table: {
                type: { summary: 'string' }
            },
            control: {
                type: 'string'
            }
        },
        logos: {
            name: 'logos',
            description: '',
            table: {
                type: { summary: 'IconModel[]' }
            },
            control: {
                type: 'array'
            }
        },
        show$: {
            name: 'show$',
            description: '',
            table: {
                type: { summary: 'Observable<boolean>' },
            },
            control: {
                type: 'Observable'
            }
        },
    },
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
    component: NavbarComponent,
    props: args,
});

export const navbar = Template.bind({});
navbar.args = {
}

