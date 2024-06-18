import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Menu } from '@models/menu';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MenuService {
	private readonly URL = `${environment.HOSTNAME}/menu/`;
	private readonly _http = inject(HttpClient);

	menu$ = new BehaviorSubject<Menu[]>([]);

	findByRoles(roles: string): Observable<Menu[]> {
		return this._http.get<Menu[]>(this.URL + `findByRoles/${roles}`);
	}
}
