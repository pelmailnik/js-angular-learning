import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectAccessGuard } from './core/guards/direct-access.guard';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () =>
      import('./modules/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./modules/main/main.module').then(m => m.MainModule),
    canActivate: [DirectAccessGuard],
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
