import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import { UserComponent } from '../user/user.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule {}
