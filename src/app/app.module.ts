import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule, Input, Output, EventEmitter} from '@angular/core';

import { JokeComponent, JokeListComponent, JokeFormComponent } from './app.component'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
