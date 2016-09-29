/*
* This is a shared module to load the prime NG libraries
*/
import { NgModule } from '@angular/core';

import { SplitButtonModule } from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';

@NgModule({
	imports: [
	    SplitButtonModule,
	    DropdownModule
	    ],
	exports: [
	    	SplitButtonModule,
	    	DropdownModule
	    ]
})
export class PrimeModule { }