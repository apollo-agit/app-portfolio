/*
* Phase filter for array drag and drop
*/
import { Pipe, PipeTransform } from '@angular/core';

import { StoryModel } from './story.model';


@Pipe({name: 'StoryPhase', pure: false})

export class StoryPhasePipe implements PipeTransform {
	transform(stories: StoryModel[], phaseNumber: number) {
		if (stories)
			return stories.filter(story => story.phase == phaseNumber);
		else
			return null;
	}
}

