/*
* Module for the Story Board application
*/

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';



import { appRoutes, appRoutingProviders } from '../common/app.routes';
import { PrimeModule } from '../common/prime.module';

import { StoryBoard } from './storyboard.view.component';
import { StoryEdit } from './story.edit.component';
import { StoryCard } from './story.card.component';
import { StoryPhasePipe } from './story.phase.filter';

import { LocalStorageReducer } from '../common/localstorage.reducer';

let storyReducer = new LocalStorageReducer("stories");

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
	    { provide: 'StoryStore', useValue: storyReducer},
	  ],
	  bootstrap: [ StoryBoard ]

})

export class StoryBoardModule { }