# KakalUI
UI components for the kakal project

1. `design-system` which is an angular project containing UI elements
2. `my-app` which consumes those

![Usage](https://github.com/ComraxLTD/kakal-ui/blob/feat/design-lib/KakalUI.gif)

# Installation
```
$ cd design-system
$ npm i
```

# Development

```
$ cd design-system
$ npm run storybook
```

Note: Please consider https://angular.io/guide/creating-libraries#refactoring-parts-of-an-application-into-a-library when using services like router

# Usage

Create the `.npmrc` file in the root directory and paste the contents:
```
@ComraxLTD:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=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
```

Note: Putting the token here is insecure to a certain extent, but we have to make it as easy as possible for the developers to start

```
$ ng new <MY_PROJECT>
$ cd <MY_PROJECT>
$ npm install @comraxltd/kakal-ui@0.0.2 
```

In app.module:

```
import { KakalUiModule } from '@ComraxLTD/kakal-ui';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KakalUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In app.component.html

```
  <kkl-button label="hello"></kkl-button>
```