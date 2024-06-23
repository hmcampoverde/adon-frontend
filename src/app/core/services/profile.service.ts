import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment.development';
import { Profile } from '@models/profile';
import { Message } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProfileService {
	private readonly URL: string = `${environment.HOSTNAME}/profile/`;
	private readonly _http = inject(HttpClient);

	public findByIdentification(identification: string): Observable<Profile> {
		return this._http.get<Profile>(this.URL + `findByIdentification/${identification}`);
	}

	public updateProfile(identification: string, profile: Profile): Observable<Message> {
		return this._http.put<Message>(`${this.URL}udpdateProfile/${identification}`, profile);
	}
}
