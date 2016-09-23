/*
* Component for editing story
*/

import {Component, Inject} from '@angular/core';
import { StoryBoardActions, StoryModel } from './story.model';

@Component({
	selector: 'story-edit',
	templateUrl: './story.edit.component.html'

})

export class StoryEdit {

	story: storyInput;

	constructor(@Inject('StoryStore') private storyStore,
		private storyBoardActions: StoryBoardActions) {
			this.story = {title: '', description: '', points: 0};
		}

	onSubmit()  {
		let model: StoryModel = {title: this.story.title, description: this.story.description, 
			points: this.story.points};
		this.storyStore.dispatch(this.storyBoardActions.addStory(model));
	}
}

export interface storyInput {
	title: string,
	description: string, 
	points: number
}