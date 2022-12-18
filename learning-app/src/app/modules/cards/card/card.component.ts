import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppRoutes } from 'src/app/shared/routes';
import { Card } from '../cards.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  @Input() card: Card;
  @Output() removeCard: EventEmitter<boolean>;

  constructor(private _router: Router, private _route: ActivatedRoute) {
    this.card = new Card();
    this.removeCard = new EventEmitter(false);
  }

  goToEdit(): void {
    this._router.navigate(['../' + AppRoutes.EditCard, this.card.id], { relativeTo: this._route});
  }

  toRemoveCard(): void {
    this.removeCard.emit(true);
  }
}
