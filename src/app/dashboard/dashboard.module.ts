import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { SharedMdModule } from '../common/md.module';
import { appRoutes, appRoutingProviders } from '../common/app.routes';

import { Dashboard } from './dashboard.view.component';
import { DashboardCard } from './dashboard.card.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
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