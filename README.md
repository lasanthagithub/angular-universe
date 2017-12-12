# Angular Universe

Angular Universe is an Angular based libarary. The Universe library opens up creating Angular websites with minimum efforts. It will be all based on configurations. Its pre-configured with NgRx and defines you the concepts of state management. By importing the libarary in your application and configuring the module, you will get a ready NgRx Angular application. The libarary state is all based on NgRx, but its optional for you to use that in your website or not. For examples of NgRx, please take a look at the demo app in this repo. The libarary is also using Materials as a concept of design. It will provide you with a pre-configured header, navigation sections and more to come in the future. 

## Getting Started:

```
npm install angular-universe --save
```
As we use Materials for our design you will also need to install materials and CDK 
```
npm install @angular/cdk --save
npm install @angular/material --save
```
We also depend on NgRx, so run installation for the followwing 
```
npm install "@ngrx/store --save 
npm install "@ngrx/effects --save 
npm install "@ngrx/store-devtools --save 
```
Create a config.json file inside app-config/config.json

config.json example can be found in the demo app in this git repo

You will get a project that is using materials so add your theme to .angular-cli

```
	"styles": [
        "styles.css",
        "../node_modules/font-awesome/css/font-awesome.css",
        "./../node_modules/@angular/material/prebuilt-themes/indigo-pink.css" // Choose your material theme
      ],
``` 

Modify your app.module.ts file as follows: 
```
import { IUniverseConfigurationService } from 'libs/angular-universe/src/services/iuniverse.configuration.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/delay';
import { UniverseConfig } from 'libs/angular-universe/src/model/universe.config';

const configService: IUniverseConfigurationService = {
    getConfiguration() : Observable<UniverseConfig> {
      const configJson: UniverseConfig = <UniverseConfig> require('./app-config/config.json');
      return Observable.of(configJson).delay(3000); // Delay your app initialization for 3 deconds.
    }
}

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppUniverseModule.provide<AppState>(configService),
    ......
  ],
  providers: [
  ],
```

The provide function accepsts few other optional parameters. You can pass reducers for NgRx state management and list of effects. 

```
@NgModule({
  imports: [
    .......
    AppUniverseModule.provide<AppState>(configService, ROOT_REDUCER, [AppEffectTest, AppEffectOtherTest]), // Effects are optional.
   .......
  ],
  providers: [
    AppEffectTest,
    AppEffectOtherTest
  ],
```

Note to be able to use `require` keyword above to load your json, you will need to edit tsconfig.app.json as follows:

```
    "compilerOptions": {
       .....,
        "types": [
            "node"
        ]

    }
```

This only apply if you are using cli project. For reference: https://stackoverflow.com/questions/31173738/typescript-getting-error-ts2304-cannot-find-name-require 

Then inside your app.component.html add the following line:
```
<app-universe></app-universe> 
```
  The magic will show and you will have a pre-configured app with common functionality that is built for you. 

  Example of common functionality that we are working on:
```
  1- header 
  2- navigation 
  3- Modals 
  4- Alerts 
```
  Universe will be built with a responsive design that supports desktop and mobile. Universe is to be used in the future to create different app templates that will be ready for you to use with just few configurations. 

