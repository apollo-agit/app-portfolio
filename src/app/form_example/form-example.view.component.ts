import { Component, Input } from '@angular/core';

import { FormExample} from './form-example.model';






@Component ( {
	//moduleId: module.id,
	selector: 'form-example',
	templateUrl: './form-example.view.component.html'

})



export class FormExampleComponent {


	dummyData = new FormExample(1,'Norco', 'Lepke', 'lepke@gmail.com');

	submitted = false;

	onsubmit() { this.submitted = true; }

	// TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.dummyData); }
}