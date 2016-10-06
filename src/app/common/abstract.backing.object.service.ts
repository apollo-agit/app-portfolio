/*
*  Abstract class do interface the CRUD components of most 
*  form backing objects
*/

import  { Observable, Subject } from 'rxjs';

export abstract class BackingObjectService<T> {

	protected _backingObject: Subject<T>;

	public backingObject: Observable<T>;

	constructor() {
		this._backingObject = new Subject<T>();
		this.backingObject = this._backingObject.asObservable();
	}

	public abstract load(): void;

	public abstract add(obj: any): void;

	public abstract modify(id: any): void;

}