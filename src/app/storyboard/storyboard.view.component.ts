/*
* Main view component for the story board application
*/
import { Component, AfterViewInit, Inject, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

import { StoryEdit } from './story.edit.component';
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

	dialogRef: MdDialogRef<StoryEdit>;
	lastCloseResult: string;

	constructor(public dialog: MdDialog,
      			public viewContainerRef: ViewContainerRef,
      			@Inject('StoryStore') private _reducer: FluxReducer<StoryModel> ) {	}

	ngAfterViewInit() {
		this._reducer.load();
	}

	toggleEdit() {
		let config = new MdDialogConfig();
    	config.viewContainerRef = this.viewContainerRef;

    	this.dialogRef = this.dialog.open(StoryEdit, config);

    	this.dialogRef.afterClosed().subscribe(result => {
      		this.lastCloseResult = result;
		    this.dialogRef = null;
    	});
	}
	
}



