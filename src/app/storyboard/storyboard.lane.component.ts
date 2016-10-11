/*
*	Story Lane component for the Lanes of each story phase
*/

import {Component, Inject, Input, OnDestroy, AfterViewInit} from '@angular/core';

import { StoryModel } from './story.model';
import { AbstractReducer } from '../common/abstract.reducer';

@Component({
	selector: 'storyboard-lane',
	templateUrl: './storyboard.lane.component.html',
	styles: ['.flow']
})

export class StoryBoardLane implements OnDestroy, AfterViewInit {

	@Input() phase: number;

	draggedStory: StoryModel;

	stories: StoryModel[];

	constructor(@Inject('BrowserStore') private _browserReducer: AbstractReducer<StoryModel>,
	@Inject('StoryStore') private _localStoragereducer: AbstractReducer<StoryModel>  ) {


	}

	ngAfterViewInit() {
		this._browserReducer.load();

		this._browserReducer.backingObject.subscribe(data => {
			if (data && data.length > 0)
				this.draggedStory = data[0];
		});

		this._localStoragereducer.backingObject.subscribe(data => {
			this.stories = data;
		});
	}

	ngOnDestroy() {
		this.draggedStory = null;
	}

	dragStart($event, story: StoryModel) {
		this._browserReducer.add(story);
	}

	drop(event) {
		console.log('drop');
		this.draggedStory.phase = this.phase;
		this._localStoragereducer.modify(this.draggedStory, (value) => {
			 value.phase = this.draggedStory.phase;
			 return value;
		});
	}

	dragEnd(event) {
		this._browserReducer.remove(this.draggedStory);
		this.draggedStory = null;
	}

}