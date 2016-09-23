/* Material Design Module 
* This houses all material design needs
*/
import { NgModule } from '@angular/core';

import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdButtonModule} from '@angular2-material/button';
import {MdCardModule} from '@angular2-material/card';
import {MdIconModule} from '@angular2-material/icon';

@NgModule({
	imports: [
	    MdToolbarModule.forRoot(),
	    MdButtonModule.forRoot(),
	    MdCardModule.forRoot(),
	    MdIconModule.forRoot()
	    ],
	exports: [
	    	MdToolbarModule,
	    	MdButtonModule,
	    	MdCardModule,
	    	MdIconModule
	    ]

})

export class SharedMdModule { }