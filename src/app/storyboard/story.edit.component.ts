/*
* Component for editing story
*/
import {Component, Inject} from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { StoryModel } from './story.model';
import { FluxReducer } from '../common/flux.reducer';

@Component({
	selector: 'story-edit',
	templateUrl: './story.edit.component.html'

})

export class StoryEdit {

	story: storyInput;

	constructor(public dialogRef: MdDialogRef<StoryEdit>,
		@Inject('StoryStore') private _storyBackingObjectService: FluxReducer<StoryModel>) {
			this.story = {title: '', description: '', points: 0};
		}

	onSubmit()  {
		let model: StoryModel = {title: this.story.title, description: this.story.description, 
			points: this.story.points, phase: 1};
		this._storyBackingObjectService.add(model);
		this.dialogRef.close();
	}
}

export interface storyInput {
	title: string,
	description: string, 
	points: number
}