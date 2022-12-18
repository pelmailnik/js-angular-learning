import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppRoutes } from 'src/app/shared/routes';

import { User } from './user.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor(private _http: HttpClient) {
    this.user = new User();
  }

  setUser(user: User): void {
    this.user = user;
  }

  getUser(): Observable<User[]> {
    return this._http.get<User[]>(`/${AppRoutes.User}`);
  }

}
