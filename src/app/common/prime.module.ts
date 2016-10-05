	/*
* This is a shared module to load the prime NG libraries
*/
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/primeng'; 
import { SplitButtonModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { OverlayPanelModule } from 'primeng/primeng';
import { DragDropModule } from 'primeng/primeng';




@NgModule({
	imports: [
		ButtonModule,
	    SplitButtonModule,
	    DropdownModule,
	    OverlayPanelModule,
	    DragDropModule
	    ],
	exports: [
			ButtonModule,
	    	SplitButtonModule,
	    	DropdownModule,
	    	OverlayPanelModule,
	    	DragDropModule
	    ]
})
export class PrimeModule { }