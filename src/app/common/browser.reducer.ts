/*
*	Standard in JS memory reducer
*/

import { Injectable } from '@angular/core';
import  { Observable, Subject } from 'rxjs';
import * as Immutable  from 'immutable';
import { UUID } from 'angular2-uuid';

import { AbstractReducer, CallbackFunction } from './abstract.reducer';
import { AbstractModel } from './abstract.model';


@Injectable()
export class BrowserReducer<T extends AbstractModel> extends AbstractReducer<T> {

	private _store: Immutable.Map<string, T>;

	constructor(key: string) {
		super(key);
		this._store = Immutable.Map<string, T>();
	}

	public load(): void {
		this._backingObject.next(new Array<T>());
	}

	public add(obj: T): void {
		if(!obj.id)
			obj.id = UUID.UUID();
		this._store = this._store.set(obj.id, obj);
		this._backingObject.next(this._store.toArray());
	}

	public modify(obj: T, callback?: CallbackFunction<T>): void {
		this._store = this._store.update(obj.id, value => callback(value));
		this._backingObject.next(this._store.toArray());
	}

	public remove(obj: T): void {
		this._store = this._store.remove(obj.id);
		this._backingObject.next(this._store.toArray());
	}

}