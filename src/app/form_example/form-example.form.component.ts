
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

	constructor ( private lastLocation: Location) {
		
	}

	@Input() formModel: FormExample;

	@Input() formTitle: string;
	@Input() formLink: string;


	ngAfterViewInit() {

	}

//	changeLog: string[] = [];
	
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
  	/*
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let from = JSON.stringify(changedProp.previousValue);
      let to =   JSON.stringify(changedProp.currentValue);
      log.push( `${propName} changed from ${from} to ${to}`);
    }
    this.changeLog.push(log.join(', '));
    */

  }

	goBack(): void {
  	this.lastLocation.back();

	}


	//dummyData = new FormExample(1,'Norco', 'Lepke', 'lepke@gmail.com');

	submitted = false;

	onsubmit() { this.submitted = true; }

	// TODO: Remove this when we're done
  	// get diagnostic() { return JSON.stringify(this.dummyData); }
}