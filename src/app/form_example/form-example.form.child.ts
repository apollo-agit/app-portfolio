import { Component, Input } from '@angular/core';

@Component ({
	selector: 'form-example-child',
	templateUrl: './form-example.form.child.html'
})


export class FormExampleChild {

	@Input() childTitle: string;
	@Input() childLink: string;

	@Input() firstName: string;
	@Input() lastName: string;
	@Input() email: string;

}

