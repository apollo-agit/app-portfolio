/*
* Component for editing story
*/

import {Component, Inject} from '@angular/core';
import { StoryModel } from './story.model';
import { AbstractReducer } from '../common/abstract.reducer';

@Component({
	selector: 'story-edit',
	templateUrl: './story.edit.component.html'

})

export class StoryEdit {

	story: storyInput;

	constructor(@Inject('StoryStore') private _storyBackingObjectService: AbstractReducer<StoryModel>) {
			this.story = {title: '', description: '', points: 0};
		}

	onSubmit()  {
		let model: StoryModel = {title: this.story.title, description: this.story.description, 
			points: this.story.points, phase: 1};
		this._storyBackingObjectService.add(model);
	}
}

export interface storyInput {
	title: string,
	description: string, 
	points: number
}