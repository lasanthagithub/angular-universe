# Angular Universe

Angular Universe is an Angular based libarary. The Universe library opens up creating Angular application with minimum efforts. It will be all based on configurations. 

## Getting Started:

Angular Universe is being pushed to npm and yarn very soon. You will need to run ng new YouAppName and then install the angular-universe libarary. 

Create a config.json file inside app-config/config.json

config.json example can be found in the demo app in this git repo


Modify your app.module.ts file as follows: 
```
import { AppUniverseModule } from 'angular-universe';
const config = require('./app-config/config.json');
@NgModule({
  imports: [
    .......,
    AppUniverseModule.fromConfig(config),
    .......
  ], ......
```

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

