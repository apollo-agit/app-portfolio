/*
* Redux reducer to track the state of the story model(s)
*/

import { AvailableStoryActions, StoryActionModel } from './story.model';

const initialState = {
	stories: []
}

export function storyReducer(state = initialState, action: StoryActionModel) {

	switch(action.type) {
		case AvailableStoryActions.ADD_STORY: 
		let story = action.storyBoardModel;
		return {
			stories: state.stories.concat(story)
		}		
	}

}