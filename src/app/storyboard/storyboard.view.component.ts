/*
* Main view component for the story board application
*/
import { Component, OnDestroy, Inject } from '@angular/core';

import { StoryModel } from './story.model';

@Component({
	templateUrl: './storyboard.view.component.html'
})

export class StoryBoard implements OnDestroy {

	stories: StoryModel[];

	draggedStory: StoryModel;

	constructor(@Inject('StoryStore') private storyStore) {
		this.storyStore.subscribe(() => {
			let state = this.storyStore.getState();
			this.stories = state.stories;
		});
	}

	ngOnDestroy() {
		this.draggedStory = null;
	}

	dragStart($event, story: StoryModel) {
		this.draggedStory = story;
	}

	drop(event, phaseNumber) {
		console.log(phaseNumber);
		this.draggedStory.phase = phaseNumber;
	}

	dragEnd(event) {
		this.draggedStory = null;
	}
}
