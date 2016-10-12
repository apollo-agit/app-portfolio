/*
* Main view component for the story board application
*/
import { Component, AfterViewInit, Inject } from '@angular/core';

import { StoryModel } from './story.model';
import { FluxReducer } from '../common/flux.reducer';
import { PassThroughService } from '../common/pass.through.service';


@Component({
	templateUrl: './storyboard.view.component.html',
	providers: [
		{ provide: 'key', useValue: 'drag' },
		{ provide: 'DragStore', useClass: FluxReducer }
	]
})

export class StoryBoard implements AfterViewInit {	

	constructor(@Inject('StoryStore') private _reducer: FluxReducer<StoryModel> ) {	}

	ngAfterViewInit() {
		this._reducer.load();
	}
	
}
