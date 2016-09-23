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

	constructor(@Inject('StoryStore') private storyStore) {
		this.storyStore.subscribe(() => {
			let state = this.storyStore.getState();
			console.log(state);
			this.stories = state.stories;
		});
	}

	ngOnDestroy() {
		
	}
}
