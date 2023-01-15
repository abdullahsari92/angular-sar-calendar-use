import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SarCalendarModule } from 'sar-calendar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SarCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
