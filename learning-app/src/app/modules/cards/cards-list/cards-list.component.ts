import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CardsService } from 'src/app/core/services/cards.service';
import { HeaderService } from 'src/app/core/services/header-service/header-service.service';
import { IconRegistryService } from 'src/app/core/services/icon-registry/icon-registry.service';
import { AppRoutes } from 'src/app/shared/routes';
import { Card, NEW_CARD_ID } from '../cards.type';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  public title: string;
  public cardArray: Card[];
  public container: string;

  constructor(
    private _headerService: HeaderService,
    private _iconService: IconRegistryService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _cardsService: CardsService,
    ) {
      this.title = 'Cards list';
      this.cardArray = [];
      this._iconService.toRegisterIcon('plus-add');
      this.container = '';
  }

  ngOnInit(): void {
    this._headerService.setTitle(this.title);
    this._cardsService.getCardArray().subscribe(cardArray => {
      this.cardArray = cardArray;
    });
  }

  toAddCard(): void {
    this._router.navigate(['../' + AppRoutes.EditCard, NEW_CARD_ID], { relativeTo: this._route });
  }

  removeCard(card: Card): void {
    let index: number;
    index = this.cardArray.findIndex(item => item.id === card.id);
    this.cardArray.splice(index, 1);
    this._cardsService.delete(card.id).subscribe();
  }

  resetCards(): void {
    this.container = 'opacity';
    this._cardsService.resetCards(this.cardArray).subscribe({
      complete: () => this._cardsService.getCardArray()
        .subscribe(array => {
          this.cardArray = array;
          this.container = '';
        })
    });
  }
}

