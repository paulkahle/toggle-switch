import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ToggleSwitchModule } from '../../src';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToggleSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
