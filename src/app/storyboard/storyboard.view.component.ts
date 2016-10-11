/*
* Main view component for the story board application
*/
import { Component, AfterViewInit, Inject } from '@angular/core';

import { StoryModel } from './story.model';
import { AbstractReducer } from '../common/abstract.reducer';


@Component({
	templateUrl: './storyboard.view.component.html'
})

export class StoryBoard implements AfterViewInit {	

	constructor(@Inject('StoryStore') private _reducer: AbstractReducer<StoryModel> ) {	}

	ngAfterViewInit() {
		this._reducer.load();
	}
	
}
