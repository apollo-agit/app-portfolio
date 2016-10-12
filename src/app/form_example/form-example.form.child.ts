import { Component, Input } from '@angular/core';
import { FormExample } from './form-example.model';

@Component ({
	selector: 'form-example-child',
	templateUrl: './form-example.form.child.html'
})


export class FormExampleChild {

	@Input() formModel: FormExample;

}

