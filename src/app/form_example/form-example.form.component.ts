
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';


@Component({

	selector: 'form-example-form',
	templateUrl: './form-example.form.component.html'
	
})

export class FormExampleFormComponent {

	

	constructor (

		private lastLocation: Location

		) {}

	@Input() formTitle: string;
	@Input() formLink: string;


	goBack(): void {
  	this.lastLocation.back();

	}
}