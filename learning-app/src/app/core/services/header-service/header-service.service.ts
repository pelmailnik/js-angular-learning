import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { AppRoutes } from 'src/app/shared/routes';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  titleSubj: BehaviorSubject<string>;
  userSubj: BehaviorSubject<string>;

  constructor(
    private _location: Location,
    private _router: Router,
    ) {
      this.titleSubj = new BehaviorSubject<string>('');
      this.userSubj = new BehaviorSubject<string>('');
    }

  back(): void {
    this._location.back();
  }

  isBackDisplayed(): boolean {
    return this._router.url !== `/${AppRoutes.Main}`;
  }

  setTitle(title: string): void {
    this.titleSubj.next(title);
  }

  getTitle(): Observable<string> {
    return this.titleSubj.asObservable();
  }

  setUserTitle(user: string): void {
    this.userSubj.next(user);
  }
}
