/*
* Data Model and Model actions for Story Board objects
*/
import { UUID } from 'angular2-uuid';

export interface StoryModel {
	id?: string, 
	title: string,
	description: string, 
	points: number,
	phase: number
}

export interface StoriesActionModel {
	type: AvailableStoryActions, 
	stories: StoryModel[]
}

export interface StoryActionModel {
	type: AvailableStoryActions, 
	storyBoardModel: StoryModel
}

export enum AvailableStoryActions {
	ADD_STORY,
	MOVE_STORY,
	FETCH_OK,
	FETCH_ERROR
}

export class StoryBoardActions {

	constructor() {	}
	
	addStory(story: StoryModel): StoryActionModel {
		story.id = UUID.UUID();
		return { type: AvailableStoryActions.ADD_STORY, storyBoardModel: story };
	}

	moveStory(story: StoryModel, phaseNumber: number) : StoryActionModel {
		story.phase = phaseNumber;
		return { type: AvailableStoryActions.MOVE_STORY, storyBoardModel: story};
	}

	fetchOk(stories: StoryModel[]) : StoriesActionModel {
		return { type: AvailableStoryActions.MOVE_STORY, stories: stories};
	}

}