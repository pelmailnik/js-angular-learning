import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { CardsRoutingModule } from './cards-routing.module';
import { CardComponent } from './card/card.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { EditCardComponent } from './edit-card/edit-card.component';


@NgModule({
  declarations: [
    CardComponent,
    CardsListComponent,
    EditCardComponent,
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    HeaderModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class CardsModule { }
