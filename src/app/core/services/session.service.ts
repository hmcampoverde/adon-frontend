import { Injectable, inject } from '@angular/core';
import { User } from '@models/user';
import { TokenService } from './token.service';

@Injectable({
	providedIn: 'root'
})
export class SessionService {
	private tokenService = inject(TokenService);

	get user(): User {
		let payload = this.getPayloadDecoded();
		return new User(
			JSON.parse(payload).fullname,
			JSON.parse(payload).sub,
			undefined,
			undefined,
			JSON.parse(payload).roles
		);
	}

	private getPayloadDecoded(): string {
		return this.tokenService.getToken() ? atob(this.tokenService.getToken().split('.')[1]) : null;
	}
}
