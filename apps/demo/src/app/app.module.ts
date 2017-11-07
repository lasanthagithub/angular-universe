import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { WorkspaceModule } from 'libs/workspace';
import { AppUniverseModule } from 'libs/app-universe';

import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
const config = require('./app-config/config.json');
@NgModule({
  imports: [BrowserModule, 
                NxModule.forRoot(), 
                HttpClientModule,
                MatCardModule,
                WorkspaceModule, 
                FlexLayoutModule,
                AppUniverseModule.fromConfig(config)
            ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
