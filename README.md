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
