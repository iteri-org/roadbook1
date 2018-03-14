import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YagaModule } from '@yaga/leaflet-ng2';
import * from '@turf/turf';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YagaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
