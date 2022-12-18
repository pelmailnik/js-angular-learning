import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {
  private _imagesUrl: string;

  constructor(private _iconRegistry: MatIconRegistry, private _sanitizer: DomSanitizer) {
    this._imagesUrl = '../../../assets/images/';
  }

  toRegisterIcon(name: string): void {
    this._iconRegistry.addSvgIcon(
      name,
      this._sanitizer.bypassSecurityTrustResourceUrl(this._imagesUrl + name + '.svg')
    );
  }
}
