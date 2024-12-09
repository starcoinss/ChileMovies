import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagotab2Page } from './pagotab2.page';

const routes: Routes = [
  {
    path: '',
    component: Pagotab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagotab2PageRoutingModule {}
