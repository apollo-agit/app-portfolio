import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRoutes, appRoutingProviders } from './common/app.routes';

import { DashboardModule } from './dashboard/dashboard.module';
import { StoryBoardModule } from './storyboard/storyboard.module';

import { PrimeModule } from './common/prime.module';

import { FormExampleModule } from './form_example/form-example.module'; // added by Devesh


@NgModule({
  imports: [
    BrowserModule,
    appRoutes,
    DashboardModule,
    StoryBoardModule,
    PrimeModule
    , FormExampleModule //added by Devesh
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }