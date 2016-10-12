
import { Component, Input, AfterViewInit, OnChanges, SimpleChange} from '@angular/core';
import { Location } from '@angular/common';
import { FormExampleComponent } from './form-example.view.component';
import { FormExampleModule } from './form-example.module';
import { FormExample } from './form-example.model';
//import { NgModule }      from '@angular/core';
//import { FormExampleChild } from './form-example.form.child';
//import { FormService } from './form-example.service';

@Component({

	selector: 'form-example-form',
	templateUrl: './form-example.form.component.html'
	
})

export class FormExampleFormComponent implements OnChanges {

	constructor ( ) {}

	@Input() formTitle: string;
	@Input() formLink: string;

	submitted = false;

	onSubmit() { 

		this.submitted = true;
 
	}

	ngAfterViewInit() {}
	
  	//ngOnChanges(changes: {[propKey: string]: SimpleChange}) {}
  	ngOnChanges() {}
}