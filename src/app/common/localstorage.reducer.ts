/*
* Service implementation for stories
*/
import { Injectable } from '@angular/core';
import  { Observable, Subject } from 'rxjs';
import * as Immutable  from 'immutable';
import { UUID } from 'angular2-uuid';

import { AbstractReducer, CallbackFunction } from './abstract.reducer';
import { AbstractModel } from './abstract.model';


@Injectable()
export class LocalStorageReducer<T extends AbstractModel> extends AbstractReducer<T> {

	private _store: Immutable.Map<string, T>;

	constructor(key: string) {
		super(key);
		this._store = Immutable.Map<string, T>();
	}

	public load(): void {
		let data: Array<T> = JSON.parse(localStorage.getItem(this.key));
		if(data) {
			data.forEach(model => {
				this.add(model);
			});
		}
		this._backingObject.next(this._store.toArray());
	}

	public add(obj: T): void {
		if(!obj.id)
			obj.id = UUID.UUID();
		this._store = this._store.set(obj.id, obj);
		localStorage.setItem(this.key, JSON.stringify(this._store.toArray()));
		this._backingObject.next(this._store.toArray());
	}

	public modify(obj: T, callback?: CallbackFunction<T>): void {
		this._store = this._store.update(obj.id, value => callback(value));
		localStorage.setItem(this.key, JSON.stringify(this._store.toArray()));
		this._backingObject.next(this._store.toArray());
	}

}

