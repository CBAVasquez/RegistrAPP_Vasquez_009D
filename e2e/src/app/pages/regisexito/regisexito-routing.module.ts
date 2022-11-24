import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisexitoPage } from './regisexito.page';

const routes: Routes = [
  {
    path: '',
    component: RegisexitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisexitoPageRoutingModule {}
