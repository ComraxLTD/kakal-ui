// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator, moduleMetadata, } from '@storybook/angular';
import { TypographyComponent } from '../../projects/kakal-ui/src/lib/typography/typography.component';

export default {
    title: 'Typography/typography',
    decorators: [componentWrapperDecorator((story) => `<div class="mat-body">${story}</div>`), moduleMetadata({
        imports: [],
        declarations: [TypographyComponent]
    })],
    component: TypographyComponent,
} as Meta;

const Template: Story<TypographyComponent> =
    (args: TypographyComponent) => ({
        component: TypographyComponent,
        props: args,
        template: `
        <kkl-typography size='3'>Size : 3</kkl-typography>
        <br/>
        <kkl-typography weight='700'>Weight : 700</kkl-typography>
        <br/>
        <kkl-typography underline='true'>Underline : true</kkl-typography>
        <br/>
        <kkl-typography color='success'>Color : success</kkl-typography>
        <br/>
        <kkl-typography disabled='true'>Disabled : true</kkl-typography>
        <br/>
        <kkl-typography style="display:flex" dir='rtl'>Dir : rtl</kkl-typography>
        `
    });

export const typography = Template.bind({});
typography.args = {
    size: 3,
    weight: 700,
    underline:true,
    color:'success',
    disabled:true,
    dir:'rtl'
}
