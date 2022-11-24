import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisexitoPageRoutingModule } from './regisexito-routing.module';

import { RegisexitoPage } from './regisexito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisexitoPageRoutingModule
  ],
  declarations: [RegisexitoPage]
})
export class RegisexitoPageModule {}
