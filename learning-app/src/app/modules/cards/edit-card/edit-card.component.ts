import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HeaderService } from 'src/app/core/services/header-service/header-service.service';
import { Card, NEW_CARD_ID } from '../cards.type';
import { CardsService } from 'src/app/core/services/cards.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {
  private _title: string;
  private _id: number;
  cardEditForm: FormGroup;

  constructor(
    private _headerService: HeaderService,
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _cardService: CardsService,
    ) {
    this._title = 'Edit card';
    this._headerService.setTitle(this._title);
    this._id = Number(this._route.snapshot.paramMap.get('id'));
    this.cardEditForm = this._fb.group({
      theme: ['', [Validators.required, Validators.minLength(3)]],
      sourceText: ['', [Validators.required, Validators.maxLength(150)]],
      translation: ['', [Validators.required, Validators.maxLength(150)]],
      color: '',
    });
  }

  ngOnInit(): void {
    this._cardService.getCard(this._id).subscribe(card => {
      this.cardEditForm.setValue({
        theme: card.theme,
        sourceText: card.sourceText,
        translation: card.translation,
        color: card.color,
      });
    });
  }

  isShowMessageRequired(formControlName: string): boolean {
    const absCont = this.cardEditForm.get(formControlName);

    return absCont?.errors?.required && (absCont?.touched ||
            absCont?.dirty) && absCont?.invalid;
  }

  isShowMessageLength(formControlName: string, bound: boolean): boolean {
    const valErr = this.cardEditForm.get(formControlName)?.errors;

    return bound ? valErr?.maxlength : valErr?.minlength;
  }

  save(): void {
    const card = new Card(
      this._id,
      this.cardEditForm.value.theme,
      this.cardEditForm.value.sourceText,
      this.cardEditForm.value.translation,
      this.cardEditForm.value.color,
    );
    if (card.id === NEW_CARD_ID) {
      this._cardService.add(card).subscribe();
    } else {
      this._cardService.update(card).subscribe();
    }
    this._headerService.back();
  }

  discard(): void {
    this._headerService.back();
  }

}
