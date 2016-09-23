/*
* Cards for each story
*/
import {Component, Inject, Input} from '@angular/core';

import { StoryModel } from './story.model';

@Component({
	selector: 'story-card',
	templateUrl: './story.card.component.html'
})

export class StoryCard {

	@Input() story: StoryModel;

}