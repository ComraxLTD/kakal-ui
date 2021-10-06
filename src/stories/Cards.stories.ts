import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { CardDashboardComponent } from 'src/app/components/cards/card-dashboard/card-dashboard.component';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import { ClassesDirective } from 'src/app/utilities/directives/classes.directive';
import { MaterialModule } from 'src/material/material.module';
import { CardStatusComponent } from 'src/app/components/cards/card-status/card-status.component';
import { VariantDirective } from 'src/app/utilities/directives/variant.directive';
import { CardStepComponent } from 'src/app/components/cards/card-step/card-step.component';
import { CardWizardComponent } from 'src/app/components/cards/card-wizard/card-wizard.component';
import { StepModel } from 'src/app/components/step/step.model';
import { CardUserComponent } from 'src/app/components/cards/card-user/card-user.component';

export default {
  title: 'Cards',
  decorators: [
    moduleMetadata({
      declarations: [
        ClassesDirective,
        VariantDirective,
        IconComponent,
        TypographyComponent,
        CardDashboardComponent,
        CardStatusComponent,
        CardStepComponent,
        CardUserComponent,
        CardWizardComponent,
      ],
      imports: [CommonModule, MaterialModule],
    }),
  ],
} as Meta;

const CardDashboardTemplate: Story<CardDashboardComponent> = (
  args: CardDashboardComponent
) => ({
  props: args,
  template: `
    <div style='
    height: 100px;
    background: black;
    width: 100px;
    border-radius: 12px;
    margin: 0 auto;'>
    <app-card-dashboard ${Object.keys(args).reduce(
      (acc, key) =>
        `${acc} [${key}]='${
          typeof args[key] === 'object' ? JSON.stringify(args[key]) : args[key]
        }'`,
      ''
    )}>
    </app-card-dashboard>
    </div>`,
});
export const Dashboard = CardDashboardTemplate.bind({});
Dashboard.args = {
  card: {
    label: 'test',
    size: 15,
    svgUrl: 'assets',
  },
};
const CardStatusTemplate: Story<CardStatusComponent> = (
  args: CardStatusComponent
) => ({
  props: args,
  template: `
    <div style='    flex-direction: row;
    box-sizing: border-box;
    display: flex;
    place-content: center;
    align-items: center;'>
    <app-card-status ${Object.keys(args).reduce(
      (acc, key) =>
        `${acc} [${key}]='${
          typeof args[key] === 'object' ? JSON.stringify(args[key]) : args[key]
        }'`,
      ''
    )}></app-card-status>
    </div>`,
});

export const Status = CardStatusTemplate.bind({});
Status.args = {
  status: new StepModel({
    variant: 'circle',
    type: 'status',
    size: 8,
    isActive: false,
    path: 'assets',
    svgUrl: 'assets',
    label: 'ספר נכסים',
    value: null,
  }),
};

const CardStepTemplate: Story<CardStepComponent> = (
  args: CardStepComponent
) => ({
  props: args,
  template: `<app-card-step ${Object.keys(args).reduce(
    (acc, key) =>
      `${acc} [${key}]='${
        typeof args[key] === 'object' ? JSON.stringify(args[key]) : args[key]
      }'`,
    ''
  )}></app-card-step>`,
});

export const Step = CardStepTemplate.bind({});
Step.args = {};

const CardWizardTemplate: Story<CardWizardComponent> = (
  args: CardWizardComponent
) => ({
  props: args,
  template: `<app-card-wizard ${Object.keys(args).reduce(
    (acc, key) =>
      `${acc} [${key}]='${
        typeof args[key] === 'object' ? JSON.stringify(args[key]) : args[key]
      }'`,
    ''
  )}></app-card-wizard>`,
});

export const Wizard = CardWizardTemplate.bind({});
Wizard.args = {};

// CARD USER
const CardUserTemplate: Story<CardUserComponent> = (args: CardUserComponent) => ({
  props: args,
});

export const User = CardUserTemplate.bind({});
User.args = {};
