/*
* Main view component for the story board application
*/
import { Component, OnDestroy, OnInit, Inject } from '@angular/core';

import { StoryModel } from './story.model';
import { AbstractReducer } from '../common/abstract.reducer';


@Component({
	templateUrl: './storyboard.view.component.html'
})

export class StoryBoard implements OnDestroy {

	stories: StoryModel[];
	draggedStory: StoryModel;

	constructor(@Inject('StoryStore') private _storyBackingObjectService: AbstractReducer<StoryModel> ) {
		this._storyBackingObjectService.backingObject.subscribe(data => {
			this.stories = data;
		});
	}

	ngOnInit() {
		this._storyBackingObjectService.load();
	}

	ngOnDestroy() {
		this.draggedStory = null;
	}

	dragStart($event, story: StoryModel) {
		this.draggedStory = story;
	}

	drop(event, phaseNumber) {
		this.draggedStory.phase = phaseNumber;
		this._storyBackingObjectService.modify(this.draggedStory, (value) => {
			 value.phase = this.draggedStory.phase;
			 return value;
		});
	}

	dragEnd(event) {
		this.draggedStory = null;
	}
}
