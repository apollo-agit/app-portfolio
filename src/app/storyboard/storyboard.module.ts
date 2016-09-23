/*
* Module for the Story Board application
*/

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { SharedMdModule } from '../common/md.module';
import { appRoutes, appRoutingProviders } from '../common/app.routes';

import { StoryBoard } from './storyboard.view.component';

@NgModule({
	 imports: [
	    BrowserModule,
	    FormsModule,
	    appRoutes,
	    SharedMdModule
	  ],
	  declarations: [
	    StoryBoard
	  ],
	  providers: [
	    appRoutingProviders
	  ],
	  bootstrap: [ StoryBoard ]

})

export class StoryBoardModule { }