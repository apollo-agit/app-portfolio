/*
*  Abstract class do interface the CRUD components of most 
*  form backing objects
*/

import  { Observable, Subject } from 'rxjs';

export abstract class AbstractReducer<T> {

	key: string;

	protected _backingObject: Subject<Array<T>>;

	public backingObject: Observable<Array<T>>;

	constructor(key: string) {
		this.key = key;
		this._backingObject = new Subject<Array<T>>();
		this.backingObject = this._backingObject.asObservable();
	}

	public abstract load(): void;

	public abstract add(obj: T): void;

	public abstract modify(obj: T, callback?: CallbackFunction<T>): void;

}

export interface CallbackFunction<T> {
	(obj: T): T;
}