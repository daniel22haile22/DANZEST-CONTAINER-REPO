import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxDanzestModule } from 'ngx-danzest';
import { ExampleLibModule } from 'projects/example-lib/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ExampleLibModule, NgxDanzestModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
