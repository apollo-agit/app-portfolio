import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { appRoutes, appRoutingProviders } from '../common/app.routes';
import { FormsModule } from '@angular/Forms';
import { FormExampleComponent } from './form-example.view.component';
import { FormExampleCard} from './form-example.card.component';




@NgModule({
  imports: [
    BrowserModule,
    appRoutes,
    FormsModule
  ],
  declarations: [
    FormExampleComponent,
    FormExampleCard
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ FormExampleComponent ]
})

export class FormExampleModule { }