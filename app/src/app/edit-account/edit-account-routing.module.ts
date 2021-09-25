import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAccountPage } from './edit-account.page';

const routes: Routes = [
  {
    path: '',
    component: EditAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAccountPageRoutingModule {}
