import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { HeaderService } from 'src/app/core/services/header-service/header-service.service';
import { AppRoutes } from 'src/app/shared/routes';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private _title: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _headerService: HeaderService
    ) {
      this._title = 'Main menu';
    }

  ngOnInit(): void {
    this._headerService.setTitle(this._title);
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this._router.url === '/' + AppRoutes.Main) {
          this._headerService.setTitle(this._title);
        }
      }
    });
  }

  goToCards(): void {
    this._router.navigate([AppRoutes.Cards], { relativeTo: this._route });
  }

  isContentDisplayed(): boolean {
    return this._router.url === '/' + AppRoutes.Main;
  }
}
