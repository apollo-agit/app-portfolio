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
import { StoryBoardActions } from './story.model';
import { StoryEdit } from './story.edit.component';
import { StoryCard } from './story.card.component';
import { StoryPhasePipe } from './story.phase.filter';

const storyStore = createStore(storyReducer);

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
	    StoryPhasePipe
	  ],
	  bootstrap: [ StoryBoard ]

})

export class StoryBoardModule { }