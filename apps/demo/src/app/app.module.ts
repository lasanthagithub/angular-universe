import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { WorkspaceModule} from 'libs/workspace';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, 
            NxModule.forRoot(),
            HttpClientModule,
            WorkspaceModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
