import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { appRoutes, appRoutingProviders } from '../common/app.routes';
import { FormsModule } from '@angular/forms';
import { FormExampleComponent } from './form-example.view.component';
import { FormExampleFormComponent } from './form-example.form.component';

import { FormExampleChild } from './form-example.form.child';
import { MaterialModule } from '@angular/material';




@NgModule({
  imports: [
    BrowserModule,
    appRoutes,
    MaterialModule.forRoot(),
    FormsModule
  ],
  declarations: [
    FormExampleFormComponent,
    FormExampleComponent,
    FormExampleChild
    
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ FormExampleComponent ]
})

export class FormExampleModule { }