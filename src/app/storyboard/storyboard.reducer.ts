/*
* Redux reducer to track the state of the story model(s)
*/

import { AvailableStoryActions, StoryActionModel, StoryModel } from './story.model';

const initialState = {
	stories: []
}

export function storyReducer(state = initialState, action: StoryActionModel) {
	let story: StoryModel = action.storyBoardModel;
	switch(action.type) {
		case AvailableStoryActions.ADD_STORY: 
		return {
			stories: state.stories.concat(story)
		}
		case AvailableStoryActions.MOVE_STORY: 
		var found = state.stories.find( (story) => {
			return story.id === action.storyBoardModel.id;
		});
		found.phase = story.phase;
		return {
			stories: state.stories
		}		
	}

}