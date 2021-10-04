import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material/material.module";
import { StepComponent } from 'src/app/components/step/step.component';
import { StepModel, StepType, StepVariant } from 'src/app/components/step/step.model';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import { VariantDirective } from 'src/app/utilities/directives/variant.directive';
import { ClassesDirective } from 'src/app/utilities/directives/classes.directive';

export default {
    title: 'step',
    component: StepComponent,
    decorators: [
        moduleMetadata({
            declarations: [IconComponent,TypographyComponent,VariantDirective,ClassesDirective],
            imports: [CommonModule, MaterialModule],
        }),
    ],
} as Meta;

const Template: Story<StepComponent> = (args: StepComponent) => ({
    props: args,
});

export const Default = Template.bind({});
Default.args = {
   step: new StepModel({
        variant: StepVariant.SQUARE,
        type: StepType.WIZARD,
        size: 80,
        scale:1,
        isActive:false,
        path:"assets",
        svgUrl:"assets",
        label:"ספר נכסים",
        value:null
    })
};
