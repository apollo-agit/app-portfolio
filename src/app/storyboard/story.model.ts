/*
* Data Model and Model actions for Story Board objects
*/

export interface StoryModel {
	title: string,
	description: string, 
	points: number
}

export interface StoryActionModel {
	type: AvailableStoryActions, 
	storyBoardModel: StoryModel
}

export enum AvailableStoryActions {
	ADD_STORY
}

export class StoryBoardActions {

	constructor() {	}
	
	addStory(story: StoryModel): StoryActionModel {
		console.log(2);
		return { type: AvailableStoryActions.ADD_STORY, storyBoardModel: story };
	}

}