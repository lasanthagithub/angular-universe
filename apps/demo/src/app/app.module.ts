import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { WorkspaceModule } from 'libs/workspace';
import { AppUniverseModule } from 'libs/app-universe';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, 
                NxModule.forRoot(), 
                HttpClientModule, 
                WorkspaceModule, 
                AppUniverseModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
