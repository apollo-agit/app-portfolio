/*
* Component for editing story
*/

import {Component, Inject} from '@angular/core';
import { StoryBoardActions, StoryModel } from './story.model';
import { StoryBackingObjectService } from './story.backing.object.service';

@Component({
	selector: 'story-edit',
	templateUrl: './story.edit.component.html'

})

export class StoryEdit {

	story: storyInput;

	constructor(private _storyBackingObjectService: StoryBackingObjectService) {
			this.story = {title: '', description: '', points: 0};
		}

	onSubmit()  {
		let model: StoryModel = {title: this.story.title, description: this.story.description, 
			points: this.story.points, phase: 1};
			console.log('what?')
		this._storyBackingObjectService.add(model);
	}
}

export interface storyInput {
	title: string,
	description: string, 
	points: number
}