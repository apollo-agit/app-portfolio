/*
* Module for the Story Board application
*/

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { appRoutes, appRoutingProviders } from '../common/app.routes';
import { PrimeModule } from '../common/prime.module';

import { StoryBoard } from './storyboard.view.component';
import { StoryModel } from './story.model';
import { StoryEdit } from './story.edit.component';
import { StoryBoardLane } from './storyboard.lane.component';
import { StoryPhasePipe } from './story.phase.filter';

import { LocalStorageReducer } from '../common/localstorage.reducer';
import { BrowserReducer } from '../common/browser.reducer';

let storyReducer = new LocalStorageReducer<StoryModel>("stories");

let browserReducer = new BrowserReducer<StoryModel>('dragged');

@NgModule({
	 imports: [
	    BrowserModule,
	    FormsModule,
	    appRoutes,
	    PrimeModule
	  ],
	  declarations: [
	    StoryBoard,
	    StoryEdit,
	    StoryBoardLane,
	    StoryPhasePipe
	  ],
	  providers: [
	    appRoutingProviders,
	    { provide: 'StoryStore', useValue: storyReducer},
	    { provide: 'BrowserStore', useValue: browserReducer}
	  ],
	  bootstrap: [ StoryBoard ]

})

export class StoryBoardModule { }