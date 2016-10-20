/*
* Module for the Story Board application
*/

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { DndModule } from 'ng2-dnd';

import { appRoutes, appRoutingProviders } from '../common/app.routes';

import { StoryBoard } from './storyboard.view.component';
import { StoryModel } from './story.model';
import { StoryEdit } from './story.edit.component';
import { StoryBoardLane } from './storyboard.lane.component';
import { StoryCard } from './story.card.component';
import { StoryPhasePipe } from './story.phase.filter';

import { FluxReducer } from '../common/flux.reducer';
import { LocalStorageService } from '../common/localstorage.service';

//let localStorageService = new LocalStorageService<StoryModel>();

@NgModule({
	 imports: [
	    BrowserModule,
	    FormsModule,
	    appRoutes,
	    MaterialModule.forRoot(),
	    DndModule.forRoot()
	  ],
	  exports: [BrowserModule, DndModule],
	  declarations: [
	    StoryBoard,
	    StoryEdit,
	    StoryBoardLane,
	    StoryPhasePipe,
	    StoryCard
	  ],
	  entryComponents: [
	  	StoryEdit
	  ],
	  providers: [
	    appRoutingProviders,
	    { provide: 'key', useValue: 'stories' },
	    { provide: 'BackendService', useClass: LocalStorageService },
	    { provide: 'StoryStore', useClass: FluxReducer }
	  ],
	  bootstrap: [ StoryBoard ]

})

export class StoryBoardModule { }