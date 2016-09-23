/*
* Module for the Story Board application
*/

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { createStore } from 'redux';

import { SharedMdModule } from '../common/md.module';
import { appRoutes, appRoutingProviders } from '../common/app.routes';

import { StoryBoard } from './storyboard.view.component';
import { storyReducer } from './storyboard.reducer';
import { StoryBoardActions } from './story.model';
import { StoryEdit } from './story.edit.component';
import { StoryCard } from './story.card.component';

const storyStore = createStore(storyReducer);

@NgModule({
	 imports: [
	    BrowserModule,
	    FormsModule,
	    appRoutes,
	    SharedMdModule
	  ],
	  declarations: [
	    StoryBoard,
	    StoryEdit,
	    StoryCard
	  ],
	  providers: [
	    appRoutingProviders,
	    StoryBoardActions,
	    { provide: 'StoryStore', useValue: storyStore}
	  ],
	  bootstrap: [ StoryBoard ]

})

export class StoryBoardModule { }