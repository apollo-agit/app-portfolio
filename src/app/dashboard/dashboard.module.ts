import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { appRoutes, appRoutingProviders } from '../common/app.routes';

import { Dashboard } from './dashboard.view.component';
import { DashboardCard } from './dashboard.card.component';


@NgModule({
  imports: [
    BrowserModule,
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