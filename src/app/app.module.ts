import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdButtonModule} from '@angular2-material/button';
import {MdCardModule} from '@angular2-material/card';
import {MdIconModule} from '@angular2-material/icon';

@NgModule({
  imports: [
    BrowserModule,
    MdToolbarModule.forRoot(),
    MdButtonModule.forRoot(),
    MdCardModule.forRoot(),
    MdIconModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent]
})

export class AppModule { }