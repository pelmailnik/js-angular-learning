import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { IconRegistryService } from 'src/app/core/services/icon-registry/icon-registry.service';
import { HeaderService } from 'src/app/core/services/header-service/header-service.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string;
  public user: string;
  public backDisplay: boolean;

  constructor(
    private _iconService: IconRegistryService,
    private _headerService: HeaderService,
    private _dialog: MatDialog
  )
  {
    this.title = '';
    this.user = '';
    this._iconService.toRegisterIcon('user');
    this._iconService.toRegisterIcon('left-arrow');
    this.backDisplay = false;
  }

  ngOnInit(): void {
    this._headerService.getTitle().subscribe((title) => {
      this.title = title;
      this.backDisplay = this._headerService.isBackDisplayed();
    });
  }

  goBack(): void {
    this._headerService.back();
  }

  isBackDisplayed(): boolean {
    return this.backDisplay;
  }

  onUserClicked(): void {
    const dialogRef = this._dialog.open(UserComponent, {
      width: '400px',
      height: '605px',
    });

    dialogRef.afterClosed().subscribe(user => {
      if (user) {
       this.user = user.firstName + ' ' + user.lastName;
      }
    });
  }
}
