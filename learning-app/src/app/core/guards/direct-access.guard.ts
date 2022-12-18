import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DirectAccessGuard implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(): boolean {
    if (this._router.url === '/') {
      this._router.navigate(['welcome']);

      return false;
    }

    return true;
  }

}
