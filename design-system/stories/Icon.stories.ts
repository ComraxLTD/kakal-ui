// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata, } from '@storybook/angular';
import { IconComponent } from 'projects/kakal-ui/src/lib/icon/icon.component';
import { SizeDirective } from '../projects/kakal-ui/src/directives/size.directive';
import { MatIconModule } from '@angular/material/icon';
export default {
    title: 'Icon/icon',
    decorators: [componentWrapperDecorator((story) => `<div class="mat-body">${story}</div>`), moduleMetadata({
        imports: [MatIconModule],
        declarations: [IconComponent, SizeDirective]
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
    size: 10,
    color: 'success',
    stroke: 'text',
    backgroundColor: 'text',
    disabled: false,
    type:'svg',
    formType:'form'
} 
