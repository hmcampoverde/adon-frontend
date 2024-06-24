import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export abstract class DefaultService<T> {
	abstract findAll(): Observable<T[]>;

	abstract findById(id: number): Observable<T>;

	abstract create(t: T): Observable<Message>;

	abstract update(id: number, t: T): Observable<Message>;

	abstract deleteById(id: number): Observable<Message>;
}
