import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { appRoutes, appRoutingProviders } from '../common/app.routes';

import { Dashboard } from './dashboard.view.component';
import { DashboardCard } from './dashboard.card.component';

import { MaterialModule } from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    appRoutes
  ],
  declarations: [
    Dashboard,
    DashboardCard
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ Dashboard ]
})

export class DashboardModule { }