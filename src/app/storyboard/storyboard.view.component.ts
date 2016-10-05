/*
* Main view component for the story board application
*/
import { Component, OnDestroy, OnInit, Inject } from '@angular/core';

import { StoryModel, StoryBoardActions } from './story.model';

@Component({
	templateUrl: './storyboard.view.component.html'
})

export class StoryBoard implements OnDestroy {

	stories: StoryModel[];

	draggedStory: StoryModel;

	constructor(@Inject('storyDataService') private storyBoardDataService, 
		@Inject('StoryStore') private storyStore,
		private storyBoardActions: StoryBoardActions) {

		this.storyStore.subscribe(() => {
			let state = this.storyStore.getState();
			this.stories = state.stories;
			//this needs to have an async call (observable)
			this.storyBoardDataService.putData("stories", this.stories);
		});
	}

	ngOnInit() {
		//this needs to have an async call (observable)
		 let stories = this.storyBoardDataService.getData("stories");

		 for(let story of stories) {
			this.storyStore.dispatch(this.storyBoardActions.addStory(story));
		 }
	}

	ngOnDestroy() {
		this.draggedStory = null;
	}

	dragStart($event, story: StoryModel) {
		this.draggedStory = story;
	}

	drop(event, phaseNumber) {
		this.storyStore.dispatch(this.storyBoardActions.moveStory(this.draggedStory, phaseNumber));
	}

	dragEnd(event) {
		this.draggedStory = null;
	}
}
