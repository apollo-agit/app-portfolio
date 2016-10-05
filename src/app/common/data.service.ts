/*
* Generic data service
*/

import { Injectable } from '@angular/core';

@Injectable()
export class DataService<T> {

	public putData (key: string, data: T) : T {
		localStorage.setItem(key, JSON.stringify(data));
		return data;
	}

	public getData (key: string) : T {
		return JSON.parse(localStorage.getItem(key));
	}

}