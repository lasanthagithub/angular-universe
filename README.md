# Angular Universe

Angular Universe is an Angular based libarary. The Universe library opens up creating Angular application with minimum efforts. It will be all based on configurations. 

## Getting Started:


npm install angular-universe --save

As we use Materials for our design you will also need to install materials and CDK 

npm install @angular/cdk --save
npm install @angular/material --save

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
import {  AppUniverseModule, IConfigValue  } from 'angular-universe';
const jsonValue = require('./config.json');
const config: IConfigValue = {
    json: jsonValue
};
@NgModule({
  imports: [
    .......,
    AppUniverseModule.fromConfig(config),
    .......
  ], ......
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

