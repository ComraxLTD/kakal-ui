# KakalUi

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.5.

## Code scaffolding

Run `ng generate component component-name --project kakal-ui` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project kakal-ui`.
> Note: Don't forget to add `--project kakal-ui` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build kakal-ui` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build kakal-ui`, go to the dist folder `cd dist/kakal-ui` and run `npm publish`.

## Running unit tests

Run `ng test kakal-ui` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Dvir Changed v2.99

KKL-steps-layout

1. changed name to kkl-steps-layout
2. changed service tp steps-layout service
3. add Input() steps - for steps ui
4. add Input() actions[] - ButtonModel[] for all layout actions - form, portion and drawer (file and notes)
5. add self navigation logic
6. update selectStep event to selectionSteps
5. add Input() manuel : boolean - when set to false disable self navigation and emit selectStep event
6. add StepsSelectionEvent interface for selectStep event

KKL-bottom-navbar

1. add Input() manuel : boolean - when set to false disable self navigation and emit nextStep event
2. save and next buttons are show by default
3. ass hideNext and hideSave Inputs - when set to true hide buttons
4. need work on update show and disable of buttons

KKL-accordion-steps

1. changed name to kkl-steps-accordion
2. add steps-accordion-service - use to handle manuel navigation
3. add SelectionChangedEvent interface for stepsChanged event
4. add options interface for ui configs

kkl-steps 

1. remove steps$ input and steps array input

KKL-Grids

1. add Grids folder for different Grids
2. add kkl-display-grid
3. add kkl-document-grid 

KKL-Lobby
3. update name to kkl-lobby-grid

KKL-tabs

1. add variant input - table and default, set to default by default

KKL-title

1. changed title input to label

KKL-Page

1. add size input to for title size

KKL-Section

1. add size input to for title size
2. add title boolean input - when set to true label ui is kkl-title 

## Dvir Changed v2.991

kkl-steps

1. change steps$ input to steps

kkl-stepper-mobile

1. improve logic without input as obs
2. working with next button from bottom-navbar

## Dvir Changed v2.995

kkl-card-status

1. change CardStatus to interface
1. change CardStatus to CardStatus
2. add default options to status ui


kkl-card-step
1. change CardStep to CardStep

kkl-groups

1. add kkl-stats-group. will be use instead of kkl-stepper
2. add kkl-steps-group. will be use instead of kkl-stepper
3. add kkl-display-group. will be use instead of kkl-display-grid

kkl-display-grid

1. add type prop to DataDisplay interface - get status or action
2. change ui to switch case to handle status and action ui 

kkl-grids

1. add kkl-data-grid
2. remove kkl-display-grid
3. add kkl-lobby-grid

kkl-steps-layout

1. replace kkl-stepper with kkl-step-group

kkl-navbar

1. replace kkl-stepper with kkl-status-group
2. get status as Input instead of obs from service

kkl-tabs

1. add Tab interface

kkl-navigation

1. update logic from kkl-stepper-mobile

- remove kkl-menu and kkl-menu-items

kkl-menu-item

1. change to kkl-menu-item 
2. change interface to MenuItem
