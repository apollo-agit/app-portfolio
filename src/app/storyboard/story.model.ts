/*
* Data Model and Model actions for Story Board objects
*/
import { Inject, Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { AbstractModel } from '../common/abstract.model';

export interface StoryModel extends AbstractModel {
	title: string,
	description: string, 
	points: number,
	phase: number
}
