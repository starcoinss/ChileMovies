import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagotab2PageRoutingModule } from './pagotab2-routing.module';

import { Pagotab2Page } from './pagotab2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagotab2PageRoutingModule
  ],
  declarations: [Pagotab2Page]
})
export class Pagotab2PageModule {}
