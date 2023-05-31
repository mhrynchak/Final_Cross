import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactformPage } from './reactform.page';

const routes: Routes = [
  {
    path: '',
    component: ReactformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactformPageRoutingModule {}
