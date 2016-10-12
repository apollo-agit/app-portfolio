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

import { FluxReducer } from '../common/flux.reducer';
import { LocalStorageService } from '../common/localstorage.service';

//let localStorageService = new LocalStorageService<StoryModel>();

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
	    { provide: 'key', useValue: 'stories' },
	    { provide: 'BackendService', useClass: LocalStorageService },
	    { provide: 'StoryStore', useClass: FluxReducer }
	  ],
	  bootstrap: [ StoryBoard ]

})

export class StoryBoardModule { }