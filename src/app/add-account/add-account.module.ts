import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAccountPageRoutingModule } from './add-account-routing.module';

import { AddAccountPage } from './add-account.page';
import { BrMaskerModule } from 'br-mask'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAccountPageRoutingModule,
    BrMaskerModule,
  ],
  declarations: [AddAccountPage]
})
export class AddAccountPageModule {}
