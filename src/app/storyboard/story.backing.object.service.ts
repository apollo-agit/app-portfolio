/*
* Service implementation for stories
*/
import { Injectable } from '@angular/core';

import { BackingObjectService } from '../common/abstract.backing.object.service';
import { StoryModel } from './story.model';

@Injectable()
export class StoryBackingObjectService extends BackingObjectService<StoryModel[]> {

	private key: string = "stories";

	private state: StoryModel[] = [];

	constructor() {
		super();
	}

//localStorage.setItem(key, JSON.stringify(data));
	public load(): void {
		this.state = JSON.parse(localStorage.getItem("stories"));
		console.log('load ');
		console.log(this.state);
		this._backingObject.next(this.state);
	}

	public add(obj: StoryModel) {
		this.state.push(obj);
		console.log('add ');
		console.log(this.state);
		this._backingObject.next(this.state);
	}

	public modify() {
		
	}

}