import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutes } from 'src/app/shared/routes';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  title: string;

  constructor(private _router: Router) {
    this.title = 'Welcome to my learning application!';
  }

  goToMain(): void {
    this._router.navigate([AppRoutes.Main]);
  }

}
