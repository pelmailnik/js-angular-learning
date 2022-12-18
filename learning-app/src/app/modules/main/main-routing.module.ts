import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCardComponent } from '../cards/edit-card/edit-card.component';

import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'cards',
        loadChildren: () =>
          import('../cards/cards.module').then(m => m.CardsModule),
      },
      {
        path: 'edit-card/:id',
        component: EditCardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
