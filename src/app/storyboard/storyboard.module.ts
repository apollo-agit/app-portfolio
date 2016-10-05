/*
* Module for the Story Board application
*/

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { createStore } from 'redux';

import { appRoutes, appRoutingProviders } from '../common/app.routes';
import { PrimeModule } from '../common/prime.module';

import { StoryBoard } from './storyboard.view.component';
import { storyReducer } from './storyboard.reducer';
import { StoryBoardActions, StoryModel } from './story.model';
import { StoryEdit } from './story.edit.component';
import { StoryCard } from './story.card.component';
import { StoryPhasePipe } from './story.phase.filter';
import { DataService } from '../common/data.service';

const storyStore = createStore(storyReducer);

let storyDataService = new DataService<StoryModel>();

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
	    StoryCard,
	    StoryPhasePipe
	  ],
	  providers: [
	    appRoutingProviders,
	    StoryBoardActions,
	    { provide: 'StoryStore', useValue: storyStore},
	    { provide: 'storyDataService', useValue: storyDataService},
	    DataService,
	    StoryPhasePipe
	  ],
	  bootstrap: [ StoryBoard ]

})

export class StoryBoardModule { }