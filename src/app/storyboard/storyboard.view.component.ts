/*
* Main view component for the story board application
*/
import { Component, OnDestroy, OnInit, Inject } from '@angular/core';

import { StoryModel } from './story.model';
import { StoryBackingObjectService } from './story.backing.object.service';


@Component({
	templateUrl: './storyboard.view.component.html'
})

export class StoryBoard implements OnDestroy {

	stories: StoryModel[];
	draggedStory: StoryModel;

	constructor(private _storyBackingObjectService: StoryBackingObjectService) {
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
		//this.storyStore.dispatch(this.storyBoardActions.moveStory(this.draggedStory, phaseNumber));
	}

	dragEnd(event) {
		this.draggedStory = null;
	}
}
