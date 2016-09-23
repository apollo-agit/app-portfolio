/*
* This file houses all the modules routes in 
* the applicaiton, which we will bootstrap in main ts
*/
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dashboard } from '../dashboard/dashboard.view.component';

const routes: Routes = [
	{ path: '', component: Dashboard }

]

export const appRoutingProviders: any[] = [];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);