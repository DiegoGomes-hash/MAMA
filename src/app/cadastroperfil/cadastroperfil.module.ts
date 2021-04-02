import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { CadastroperfilPageRoutingModule } from "./cadastroperfil-routing.module";

import { CadastroperfilPage } from "./cadastroperfil.page";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroperfilPageRoutingModule
  ],
  declarations: [CadastroperfilPage]
})
export class CadastroperfilPageModule {}
