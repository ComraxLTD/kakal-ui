# KakalUI
UI components for the kakal project

# Installation
```
npm install
```

# Development

```
npm run storybook
```

Note: Please consider https://angular.io/guide/creating-libraries#refactoring-parts-of-an-application-into-a-library when using services like router

# Publishing a version
```
$ cd design-system/projects/kakal-ui
> Update package.json version (bump the version)
$ git commit -am "Message"
$ cd ../../../ (back to root folder)
$ git push
> Go to github repo and create a Release (https://github.com/ComraxLTD/kakal-ui/releases/new)
> tag name should be vX.X.X, branch should be feat/design-lib (and will be replaced with main-dev)
> Click on publish release button
```

# Usage

```
ng new <MY_PROJECT>
cd <MY_PROJECT>
npm install --save lib-kakal-ui @angular/cdk @angular/material @angular/flex-layout @ngx-pagination
```

In app.module:

```
import { AppModule as KakalUIModule } from 'lib-kakal-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KakalUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
  <kkl-button label="hello"></kkl-button>
```
