import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalksPageRoutingModule } from './walks-routing.module';

import { WalksPage } from './walks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalksPageRoutingModule
  ],
  declarations: [WalksPage]
})
export class WalksPageModule {}
