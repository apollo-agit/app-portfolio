import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedMdModule } from './common/md.module';
import { appRoutes, appRoutingProviders } from './common/app.routes';

import { DashboardModule } from './dashboard/dashboard.module';
import { StoryBoardModule } from './storyboard/storyboard.module';



@NgModule({
  imports: [
    BrowserModule,
    SharedMdModule,
    FormsModule,
    appRoutes,
    DashboardModule,
    StoryBoardModule
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