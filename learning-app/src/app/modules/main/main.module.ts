import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { MainRoutingModule } from './main-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HeaderModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
