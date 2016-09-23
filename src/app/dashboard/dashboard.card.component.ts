/*
* App Portfolio Card Component
*/
import { Component, Input } from '@angular/core';

@Component({
	selector: 'dashboard-card',
	templateUrl: './dashboard.card.component.html'
})

export class DashboardCard{

	@Input() appTitle: string;
	@Input() appLink: string;

}