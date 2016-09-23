import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { SharedMdModule } from '../common/md.module';
import { appRoutes, appRoutingProviders } from '../common/app.routes';

import { Dashboard } from './dashboard.view.component';
import { DashboardCard } from './dashboard.card.component';


@NgModule({
  imports: [
    BrowserModule,
    appRoutes,
    SharedMdModule
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