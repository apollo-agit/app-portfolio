
import { Component, Input } from '@angular/core';

@Component({
	selector: 'form-example-card',
	templateUrl: './form-example.card.component.html'
})

export class FormExampleCard{

	@Input() formTitle: string;
	@Input() formLink: string;

}